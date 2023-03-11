exports.options = {
    routePrefix: '/documentation',
    exposeRoute: true,
    swagger: {
        info: {
            title: 'Fastify API',
            description: "A blazing fast REST API using Node.js, MongoDB, Fastify and Swagger for trusted clients to take their online business to the next level.",
            version: '^0.15.3'
        },
        externalDocs: {
            url: 'https://swagger.io',
            description: 'Find more info here'
        },
        host: 'localhost:3000',
        schemes: ['http'],
        consumes: ['application/json'],
        produces: ['application/json']
    }
};