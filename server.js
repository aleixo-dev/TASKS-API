import { fastify } from 'fastify'

const server = fastify()

server.get('/', () => {
    return 'a'
})

server.listen({
    port: 3333
}).then(() => {
    console.log('🔥 Server Running..')
})