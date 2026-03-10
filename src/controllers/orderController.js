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

module.exports = {
  createOrder
};