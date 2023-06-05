const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
  res.send('Hello World my server on express');
})

app.get('/new-route', (req, res) => {
  res.send('Hello, i am new <strong>endpoint</strong>');
})

app.get('/products', (req, res) => {
  res.json([
    {
      name: 'Product 1',
      price: 2000
    },
    {
      name: 'Product 2',
      price: 3000
    }
  ]);
})

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json(
    {
      id,
      name: 'Product 2',
      price: 3000
    }
  )
})

app.get('/categories/:categorieId/products/:productId', (req, res) => {
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

app.listen(port, () => {
  console.log('My port' + port);
});
