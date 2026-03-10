//src/app.js
/*Arquivo de configuração do express*/

require("dotenv").config();

const express = require("express");

const connectDB = require("./config/database");

const orderRoutes = require("./routes/orderRoutes");

const errorHandler = require("./middlewares/errorHandler");

//const routes = require("./routes");

const app = express();

connectDB();

app.use(express.json());

//app.use("/", routes);

app.use("/", orderRoutes);

app.use(errorHandler);

module.exports = app;