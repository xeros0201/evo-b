import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { get_config,  get_config_first } from './get_config.js'
import { logger } from 'hono/logger'
import { get_entry } from './get_entry.js'
import { get_setup } from './get_setup.js'
import { defineConfig } from "patchright/test"


defineConfig({
  workers:6
})
const app = new Hono()
app.use( logger() )

app.post('/config_first', async (ctx) =>{

  let { url, cookies } = await ctx.req.json()

  let config = await get_config_first(url,cookies)
  return ctx.json(config)
})
app.post('/entry', async (ctx) =>{
  let { url } = await ctx.req.json()
    const cookies = await get_entry(url)
    return ctx.json(cookies)
})

app.post('/setup', async (ctx) =>{
  let { url,cookies } = await ctx.req.json()
    const setup = await get_setup(url,cookies)
    return ctx.json(setup)
})

app.post('/config', async (ctx) =>{
  try {
    let {   url, cookies,setup, config } = await ctx.req.json()

    let result:any =  await get_config(url,cookies,setup,config)
    console.log("???",result)
    if(!result?.metrics){
      return ctx.json({video: result?.video  })
    }

    return ctx.json({video: result?.video ||  null ,metrics: result?.metrics || null})
  } catch (error) {
    console.log(error)
    return ctx.json({error})
  }

})

const port = 3030
console.log(`Server is running on http://localhost:${port}`)

serve({
  fetch: app.fetch,
  port
})
