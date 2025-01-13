import { chromium } from "patchright"
import { get_cookies } from "./get_cookies.js"
import { chrome_config, getBrowser } from "./chrome.config.js"

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
    return  {}
  
}


