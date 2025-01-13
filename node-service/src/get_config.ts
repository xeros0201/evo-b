import { parentPort, Worker } from "worker_threads";
import path from "path";

import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { chrome_config, getBrowser } from "./chrome.config.js";
import { chromium } from "patchright";

// Add these lines near the top of the file with other imports
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const params =  JSON.stringify({
    "stealth":true,
    "headless":false
})
export const PW_ENDPOINT  = `ws://localhost:3000?token=6R0W53R135510&launch=${params}`;

export async function get_config(url:string,cookies:any,setup:any,config:any){
    console.log("get_config",url)
 
    const browser = await chromium.launch( chrome_config)

    const context = await browser.newContext()
    let page =   await  context.newPage()
    await page.context().addCookies(cookies)
    let metrics = null
    let video = null
    page.on('response', async (response) => {
         
         
        if(response.url().includes("/video?")){
            if(response.ok() ){
                video = await response.json()
            }else{
                video = null
            }
        }
        
    })
    page.on('websocket', async (ws) => {

        ws.on('framesent', async (message) => {
            try {
                let data = JSON.parse(message.payload.toString())
             
                if(data.type === 'metrics.verify'){
                    
                    metrics = data.args.result
                }  
            } catch (error) {
                
            }
           
        })
    })
     
    let res = await Promise.all([
        page.goto(url +"&game=baccarat"),
        // page.route(/.*\.(png|jpg|jpeg|gif|webp|svg|ico)$/, async route => {
        //     await route.fulfill({
        //         status: 200,
        //         contentType: 'image/svg+xml',
        //         body:  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"></svg>'
        //     });
        // }),
      
        
      
        page.waitForRequest( ss => ss.url().includes("live1.egcvi.com")),
         setTimeout(() => {
            return page.reload()
        }, 200)
        // page.route(/.*\/setup\?client_version.*/, async route => {
        //     await route.fulfill({
        //         status: 200,
        //         contentType: 'application/json', 
        //         body: setup
        //     });
        // }),
        
        // page.route(/.*\/config\?*/, async route => {
        //     await route.fulfill({
        //         status: 200,
        //         contentType: 'application/json', 
        //         body: config
        //     });
        // }),
    ]);

    
    video =   res[1].url()
    console.log("metrics >>>>> ",  metrics)
    console.log("video >>>>> ",  video)

    console.log("============ ")
    
    // while(!metrics  ){
    //      console.log("waiting for metrics")
    // }
  

   

 
    await page.close()
     
    return { video   ,metrics: metrics || null}
  
}

export async function get_config_by_worker(url: string, cookies: any, setup: any, config: any) {
    return new Promise((resolve, reject) => {
        const worker = new Worker(path.join(__dirname, 'config.worker.js'), {
            workerData: { url, cookies, setup, config }
        });

        worker.on('message', (result) => {
            resolve(result);
        });

        worker.on('error', (error) => {
            reject(error);
        });

        worker.on('exit', (code) => {
            if (code !== 0) {
                reject(new Error(`Worker stopped with exit code ${code}`));
            }
        });
    });
}




export async function get_config_first(url:string,cookies:any ){
    console.log("get_config_first",url)
//    let browser = await chromium.launch({
//      headless:false,
//      channel:"msedge",
//      devtools:true,
//      args:["--disable-blink-features=AutomationControlled"]
//    })
        
    const browser = await chromium.launch( chrome_config)

    const context = await browser.newContext()
    let page =   await  context.newPage()
    await page.context().addCookies(cookies)

    let response = await page.goto(url)
    if(response?.ok()){
        let result = await response.json()
        await page.close()
        return result

    }
    await page.close()
     
    return {}
  
}



