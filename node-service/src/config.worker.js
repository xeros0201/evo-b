
import { chromium } from "patchright";
import {   chrome_config } from "./chrome.config.js";
import { parentPort, workerData } from "worker_threads";

 

 

const params =  JSON.stringify({
    "stealth":true,
    "headless":false
})
export const PW_ENDPOINT  = `ws://localhost:3000?token=6R0W53R135510&launch=${params}`;

export async function get_config(){
    
    const { url, cookies, setup, config } = workerData;
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
        page.goto(url+"&game=baccarat"),
        page.route(/.*\.(png|jpg|jpeg|gif|webp|svg|ico)$/, async route => {
            await route.fulfill({
                status: 200,
                contentType: 'image/svg+xml',
                body:  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"></svg>'
            });
        }),
      
        
      
        page.waitForRequest( ss => ss.url().includes("live1.egcvi.com")),
        // page.route(/.*\.css$/, async route => {
        //     await route.fulfill({
        //         status: 200,
        //         contentType: 'text/css',
        //         body: 'body { background: transparent !important; }'
        //     });
        // }),
       
        // page.route(/.*\/api\/.*/, async route => {
        //     await route.fulfill({
        //         status: 200,
        //         contentType: 'application/json',
        //         body: '{}'
        //     });
        // }),
        // page.route(/.*\/log\?client_version.*/, async route => {
        //     await route.fulfill({
        //         status: 200,
        //         contentType: 'application/json',
        //         body: '{}'
        //     });
        // }),
        page.route(/.*\/setup\?client_version.*/, async route => {
            await route.fulfill({
                status: 200,
                contentType: 'application/json', 
                body: setup
            });
        }),
        ,
        page.route(/.*\/config\?*/, async route => {
            await route.fulfill({
                status: 200,
                contentType: 'application/json', 
                body: config
            });
        }),
       
    ]);

    
    video =   res[2].url()
    console.log("metrics >>>>> ",  metrics)
    console.log("video >>>>> ",  video)

    console.log("============ ")
    
    // while(!metrics  ){
    //      console.log("waiting for metrics")
    // }
  

   

 
    await page.close()
     
    const result = { video, metrics: metrics || "" };
    parentPort?.postMessage(result);
    process.exit(0);
  
}

get_config().catch(error => {
    console.error(error);
    process.exit(1);
});




 


