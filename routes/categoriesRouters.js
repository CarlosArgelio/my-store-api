const express = require('express');

const router = express.Router();

router.get('/categories/:categorieId/products/:productId', (req, res) => {
  const { categorieId, productId } = req.params;
  res.json(
    {
      categorieId,
      productId,
      name: 'Product 2',
      price: 3000
    }
  )
})

module.exports = router
