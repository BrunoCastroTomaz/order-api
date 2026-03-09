/*Arquivo de configuração do express*/

const express = require("express");

const app = express();

app.use(express.json());

// Endpoint para Health Check
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "API running"
  });
});

module.exports = app;