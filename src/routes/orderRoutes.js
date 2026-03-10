const express = require("express");

const orderController = require("../controllers/orderController");

const validate = require("../middlewares/validate");
const authenticate = require("../middlewares/authMiddleware");

const { orderSchema } = require("../validations/orderValidations");

const router = express.Router();

/**
 * @swagger
 * /order:
 *   post:
 *     summary: Criar novo pedido
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               numeroPedido:
 *                 type: string
 *               valorTotal:
 *                 type: number
 *               dataCriacao:
 *                 type: string
 *               items:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     idItem:
 *                       type: string
 *                     quantidadeItem:
 *                       type: number
 *                     valorItem:
 *                       type: number
 *     responses:
 *       201:
 *         description: Pedido criado
 */


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