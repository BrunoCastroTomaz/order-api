const Order = require("../models/orderModel");

const createOrder = async (orderData) => {
  const order = new Order(orderData);
  return await order.save();
};

const findByOrderId = async (orderId) => {
  return await Order.findOne({ orderId });
};

//Adiciona métodos skip, limit e sort para suporte a paginação no MongoDB: evita lentidão, melhora desempenho e escalabilidade
// fonte: https://scalegrid-io.translate.goog/blog/mongodb-pagination/?_x_tr_sl=en&_x_tr_tl=pt&_x_tr_hl=pt&_x_tr_pto=sge

const findAll = async (page, limit) => {
  const skip = (page - 1) * limit;

  return await Order.find()
    .skip(skip)
    .limit(limit)
    .sort({ creationDate: -1 });
};

const updateByOrderId = async (orderId, updateData) => {
  return await Order.findOneAndUpdate(
    { orderId },
    updateData,
    { returnDocument: "after" } //faz o MongoDB retornar o documento atualizado
  );
};

module.exports = {
  createOrder,
  findByOrderId,
  findAll,
  updateByOrderId
};