const express = require('express');
const productsRouters = require('./productsRouters');
const usersRouters = require('./usersRouters');
const categoriesRouters = require('./categoriesRouters');
const customersRouters = require('./customersRouters');

function routerApi(app) {

  const router = express.Router()
  app.use('/api/v1', router);
  router.use('/products', productsRouters);
  router.use('/users', usersRouters);
  router.use('/categories', categoriesRouters);
  router.use('/customers', customersRouters);
}

module.exports = routerApi;
