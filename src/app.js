//src/app.js
/*Arquivo de configuração do express*/

require("dotenv").config();

const express = require("express");

const swaggerUi = require("swagger-ui-express");

const swaggerSpec = require("./docs/swagger");

const connectDB = require("./config/database");

const orderRoutes = require("./routes/orderRoutes");
const authRoutes = require("./routes/authRoutes");

const errorHandler = require("./middlewares/errorHandler");

const app = express();

connectDB();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/", authRoutes);
app.use("/", orderRoutes);

app.use(errorHandler);

module.exports = app;