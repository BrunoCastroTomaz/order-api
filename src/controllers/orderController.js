const orderService = require("../services/orderService");

const createOrder = async (req, res, next) => {

  try {

    const order = await orderService.createOrder(req.body);

    res.status(201).json(order);

  } catch (error) {

    next(error);

  }

};

const getOrderById = async (req, res, next) => {

  try {

    const { orderId } = req.params;

    const order = await orderService.getOrderById(orderId);

    if (!order) {

      return res.status(404).json({
        message: "Order not found"
      });

    }

    res.json(order);

  } catch (error) {

    next(error);

  }

};

const listOrders = async (req, res, next) => {

  try {

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const orders = await orderService.listOrders(page, limit);

    res.json(orders);

  } catch (error) {

    next(error);

  }

};

const updateOrder = async (req, res, next) => {

  try {

    const { orderId } = req.params;

    const order = await orderService.updateOrder(orderId, req.body);

    if (!order) {

      return res.status(404).json({
        message: "Order not found"
      });

    }

    res.json(order);

  } catch (error) {

    next(error);

  }

};

const deleteOrder = async (req, res, next) => {

  try {

    const { orderId } = req.params;

    const deletedOrder = await orderService.deleteOrder(orderId);

    if (!deletedOrder) {

      return res.status(404).json({
        message: "Order not found"
      });

    }

    res.status(204).send();

  } catch (error) {

    next(error);

  }

};

module.exports = {
  createOrder,
  getOrderById,
  listOrders,
  updateOrder,
  deleteOrder
};