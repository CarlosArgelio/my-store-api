const express = require('express');

const ProductsServices = require('./../services/productServices')
const validatorHandler = require('./../middlewares/validatorHandler')
const { createProductDtos, updateProductDtos, getProductDtos } = require('./../Dtos/productDtos')

const router = express.Router();
const service = new ProductsServices();

router.get('/', async (req, res) => {
  const products = await service.find();
  res.json(products);
});

router.get('/filter', (req, res) => {
  res.send('I am filter')
});

router.get('/:id',
  validatorHandler(getProductDtos, 'params'),
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await service.findOne(id);
    res.status(200).json(product)
  } catch (error) {
    next(error);
  }
});

router.post('/',
  validatorHandler(createProductDtos, 'body'),
  async (req, res, next) => {
  try {
    const body = req.body;
    const newProduct = await service.create(body);
    res.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
});

router.patch('/:id',
  validatorHandler(getProductDtos, 'params'),
  validatorHandler(updateProductDtos, 'body'),
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const product = await service.update(id, body);
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const product = await service.delete(id);
  res.json(product);
});

module.exports = router;
