const express = require("express");

const orderController = require("../controllers/orderController");

const validate = require("../middlewares/validate");
const authenticate = require("../middlewares/authMiddleware");

const { orderSchema } = require("../validations/orderValidations");

const router = express.Router();

router.post(
  "/order",
  authenticate,
  validate(orderSchema),
  orderController.createOrder
);

router.get("/order/list", authenticate, orderController.listOrders);

router.get("/order/:orderId", authenticate, orderController.getOrderById);

router.put(
  "/order/:orderId",
  authenticate,
  validate(orderSchema),
  orderController.updateOrder
);

router.delete(
  "/order/:orderId",
  authenticate,
  orderController.deleteOrder
);

module.exports = router;