const express = require("express");
const orderController = require("../controllers/orderController");

const router = express.Router();

router.post("/order", orderController.createOrder);

router.get("/order/:orderId", orderController.getOrderById);

module.exports = router;