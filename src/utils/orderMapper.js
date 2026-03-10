const mapOrderInputToModel = (input) => {
  const orderId = input.numeroPedido.split("-")[0];

  return {
    orderId,
    value: input.valorTotal,
    creationDate: new Date(input.dataCriacao),
    items: input.items.map((item) => ({
      productId: Number(item.idItem),
      quantity: item.quantidadeItem,
      price: item.valorItem
    }))
  };
};

module.exports = {
  mapOrderInputToModel
};