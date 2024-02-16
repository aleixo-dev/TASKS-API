import { app } from './app.js'

app.listen({
    port: process.env.PORT ?? 3333
}).then(() => {
    console.log('🔥 Server Running..')
})