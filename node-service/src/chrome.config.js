import { channel } from "diagnostics_channel";
import { chromium } from "patchright";

 


let browser = null;


 export const chrome_config = {
    headless:false,
   
    args:["--disable-blink-features=AutomationControlled"],

 }

 export async function getBrowser() {
    if (!browser) {
        browser = await chromium.launch( chrome_config);
        await browser.newPage(); 
    }
    return(await (await browser.newContext()).newPage());
}


 export const user= `D:/spider-rs/node-service/user`