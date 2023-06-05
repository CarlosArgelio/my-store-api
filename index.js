const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
  res.send('Hello World my server on express');
})

app.listen(port, () => {
  console.log('My port' + port);
});
