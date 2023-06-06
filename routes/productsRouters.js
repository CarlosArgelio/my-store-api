const express = require('express');

const ProductsServices = require('./../services/productServices')

const router = express.Router();
const service = new ProductsServices();

router.get('/', (req, res) => {
  const products = service.find();
  res.json(products);
})

router.get('/filter', (req, res) => {
  res.send('I am filter')
})

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const product = service.findOne(id);
  res.status(200).json(product)
})

router.post('/', (req, res) => {
  const body = req.body;
  res.status(201).json({
    message: 'created product',
    data: body
  });
})

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'Update product',
    data: body,
    id
  });
})

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: 'Delete product',
    id
  });
})

module.exports = router;
