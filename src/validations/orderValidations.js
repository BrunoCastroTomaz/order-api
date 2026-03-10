// Schema de validação de JSON

const Joi = require("joi");

const orderSchema = Joi.object({

  numeroPedido: Joi.string().required(),

  valorTotal: Joi.number().required(),

  dataCriacao: Joi.string().isoDate().required(),

  items: Joi.array().items(

    Joi.object({

      idItem: Joi.string().required(),

      quantidadeItem: Joi.number().required(),

      valorItem: Joi.number().required()

    })

  ).min(1).required()

});

module.exports = {
  orderSchema
};