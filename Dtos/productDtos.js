const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().min(3).max(15);
const price = Joi.number().integer().min(10);
const descriptions = Joi.string().min(10);
const image = Joi.string().uri();

const createProductDtos = Joi.object({
  name: name.required(),
  price: price.required(),
  description: descriptions.required(),
  image: image.required(),
});

const updateProductDtos = Joi.object({
  name: name,
  price: price,
  description: descriptions,
  image: image,
});

const getProductDtos = Joi.object({
  id: id.required(),
});

module.exports = { createProductDtos, updateProductDtos, getProductDtos }
