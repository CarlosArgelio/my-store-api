const express = require('express');
const routerApi = require('./routes')

const app = express();
const port = 3000;


app.get('/', (req, res) => {
  res.send('Hello World my server on express');
})

app.get('/new-route', (req, res) => {
  res.send('Hello, i am new <strong>endpoint</strong>');
})

routerApi(app);


app.listen(port, () => {
  console.log('My port' + port);
});
