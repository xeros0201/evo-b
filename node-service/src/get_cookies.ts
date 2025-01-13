import type { Cookie } from "patchright"


export const COOKIES_EVOSESSIONID = new Map<string,Cookie[]>()


export const get_cookies = ( evo_ss:string) =>{
    return COOKIES_EVOSESSIONID.get(evo_ss) || []
}




export const set_cookies  = ( evo_ss:string,  cookies:Cookie[]) =>{
        COOKIES_EVOSESSIONID.set( evo_ss, cookies)
}
