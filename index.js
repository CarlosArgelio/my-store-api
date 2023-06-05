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
  res.json({
    name: 'Product 1',
    price: 1000
  });
})

app.listen(port, () => {
  console.log('My port' + port);
});
