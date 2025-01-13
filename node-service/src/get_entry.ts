import { chromium } from "patchright"
import { chrome_config, getBrowser } from "./chrome.config.js"
 


export async function get_entry(url:string ){
    console.log("entry",url)
//    let browser = await chromium.launch({
//      headless:false,
//      channel:"msedge",
//      devtools:true,
//      args:["--disable-blink-features=AutomationControlled"]
//    })
    
   
    const browser = await chromium.launch( chrome_config)

    const context = await browser.newContext()
    let page =   await  context.newPage()
   
    
    let response = await page.goto(url)
    if(response?.ok()){
        let cookies = await page.context().cookies()
        await page.close()
        return cookies

    }
   
    await page.close()
    return  []
  
}


