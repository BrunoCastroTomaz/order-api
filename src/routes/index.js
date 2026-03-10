// src/routes/index.js

/* Arquivo central de rotas */

const express = require("express");
const orderRoutes = require("./orderRoutes");

const router = express.Router();

// Endpoint para Health Check
router.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "API running"
  });
});

router.use("/", orderRoutes);

module.exports = router;