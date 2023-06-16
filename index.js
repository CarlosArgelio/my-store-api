const express = require('express');
const cors = require('cors')
const routerApi = require('./routes')

const { logErrors, errorHandler, boomErrorHandler, ormErrorHandler } = require('./middlewares/errorHandler');

const app = express();
const port = 3000;

app.use(express.json());

const whitelist = ['http://127.0.0.1:5500/', 'https://myapp.co'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allow'))
    }
  }
}
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World my server on express');
})

app.get('/new-route', (req, res) => {
  res.send('Hello, i am new <strong>endpoint</strong>');
})

routerApi(app);

app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('My port' + port);
});
