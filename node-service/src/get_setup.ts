import { chromium } from "patchright"
 
import { chrome_config  } from "./chrome.config.js"

export async function get_setup(url:string, cookie:any ){
    console.log("Setup >>>>>>>>>",url)
 

    const browser = await chromium.launch( chrome_config)

    const context = await browser.newContext()
    let page =   await  context.newPage()
    await page.context().addCookies(cookie)
    
    let response = await page.goto(url)
    if(response?.ok()){
        let result = await response.json()
        await page.close()
        return result

    }
    
    await page.close()
    await context.close()
    await browser.close()
    return  {}
  
}


