const orderService = require("../services/orderService");

const createOrder = async (req, res) => {
  try {
    const order = await orderService.createOrder(req.body);

    return res.status(201).json(order);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Error creating order"
    });
  }
};

const getOrderById = async (req, res) => {
  try {
    const { orderId } = req.params;

    const order = await orderService.getOrderById(orderId);

    if (!order) {
      return res.status(404).json({
        message: "Order not found"
      });
    }

    return res.status(200).json(order);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Error fetching order"
    });
  }
};

const listOrders = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const orders = await orderService.listOrders(page, limit);

    return res.status(200).json(orders);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Error listing orders"
    });
  }
};

module.exports = {
  createOrder,
  getOrderById,
  listOrders
};