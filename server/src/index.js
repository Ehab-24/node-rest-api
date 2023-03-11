const fastify = require("./server");

const swagger = require("../config/swagger");

const routes = require("./routes");

fastify.register(require("fastify-swagger"), swagger.options);

routes.forEach((route) => {
  fastify.route(route);
});

//Base route
fastify.get("/", async (_, __) => {
  return { hello: "world", author: "Ehab Sohail", date: new Date() };
});

const start = async () => {
  try {
    console.log("Starting server...");
    await fastify.listen(3000);
    fastify.swagger();
    console.log("Server listening on port 3000");
  } catch (e) {
    fastify.log.error(e);
    process.exit(1);
  }
};
start();