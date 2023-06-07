const express = require('express');

const ProductsServices = require('./../services/productServices')

const router = express.Router();
const service = new ProductsServices();

router.get('/', async (req, res) => {
  const products = await service.find();
  res.json(products);
});

router.get('/filter', (req, res) => {
  res.send('I am filter')
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await service.findOne(id);
    res.status(200).json(product)
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res) => {
  const body = req.body;
  const newProduct = await service.create(body);
  res.status(201).json(newProduct);
});

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const product = await service.update(id, body);
    res.status(200).json(product);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const product = await service.delete(id);
  res.json(product);
});

module.exports = router;
