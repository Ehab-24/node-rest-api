const fastify = require("fastify")({ logger: true });

require("dotenv").config();

const mongoose = require("mongoose");
mongoose
  .connect(
    `mongodb+srv://Ehab-24:${process.env.mongoPassword}@cluster1.uo8fklj.mongodb.net/?retryWrites=true/myshop`,
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
  )
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error(err));

module.exports = fastify;