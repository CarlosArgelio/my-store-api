const express = require('express');
const { faker } = require('@faker-js/faker')

const app = express();
const port = 3000;


app.get('/', (req, res) => {
  res.send('Hello World my server on express');
})

app.get('/new-route', (req, res) => {
  res.send('Hello, i am new <strong>endpoint</strong>');
})

app.get('/products', (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index++) {
    products.push(
      {
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
      }
    )
  }

  res.json(products);
})

app.get('/products/filter', (req, res) => {
  res.send('I am filter')
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


app.get('/users', (req, res) => {
  const {limit, offset } = req.query;
  if (limit && offset) {
    res.json(
      {
        limit,
        offset
      }
    )
  } else {
    res.send('Not have parameters')
  }
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
