const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
  {
    productId: {
      type: Number,
      required: true
    },
    quantity: {
      type: Number,
      required: true
    },
    price: {
      type: Number,
      required: true
    }
  },
  { _id: false } //Evita a criação de um _id para cada item do pedido
);

const orderSchema = new mongoose.Schema({
  orderId: {
    type: String,
    required: true,
    unique: true //Evitar de salvar dois pedidos com o mesmo numero
  },
  value: {
    type: Number,
    required: true
  },
  creationDate: {
    type: Date,
    required: true
  },
  items: {
    type: [itemSchema],
    required: true
  }
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;