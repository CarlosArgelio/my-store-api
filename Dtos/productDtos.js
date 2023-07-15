const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(15);
const price = Joi.number().integer().min(10);
const descriptions = Joi.string().min(10);
const image = Joi.string().uri();
const category_id = Joi.number().integer();

const price_min = Joi.number().integer();
const price_max  = Joi.number().integer();

const limit = Joi.number().integer();
const offset = Joi.number().integer();

const createProductDtos = Joi.object({
  name: name.required(),
  price: price.required(),
  description: descriptions.required(),
  image: image.required(),
  categoryId: category_id.required(),
});

const updateProductDtos = Joi.object({
  name: name,
  price: price,
  description: descriptions,
  image: image,
  categoryId: category_id
});

const getProductDtos = Joi.object({
  id: id.required(),
});

const queryProductDtos = Joi.object({
  limit,
  offset,
  price,
  price_min,
  price_max: price_max.when('price_min', {
    is: Joi.number().integer(),
    then: Joi.required()
  })
});

module.exports = { createProductDtos, updateProductDtos, getProductDtos, queryProductDtos }
