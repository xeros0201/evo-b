import { chromium, type Browser } from "patchright";

 


let browser: Browser | null = null;


 export const chrome_config = {
    headless:false,
    channel:"msedge",

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