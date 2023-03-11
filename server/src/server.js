const fastify = require("fastify")({ logger: true });

require("dotenv").config();

const mongoose = require("mongoose");
mongoose
  .connect(
    `mongodb://localhost/myShop`,
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
  )
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error(err));

module.exports = fastify;
