const express = require('express');
const productsRouters = require('./productsRouters');
const usersRouters = require('./usersRouters');
const categoriesRouters = require('./categoriesRouters');
const customersRouters = require('./customersRouters');
const ordersRouters = require('./ordersRouters');
const authRouters = require('./authRouters');

function routerApi(app) {

  const router = express.Router()
  app.use('/api/v1', router);
  router.use('/products', productsRouters);
  router.use('/users', usersRouters);
  router.use('/categories', categoriesRouters);
  router.use('/customers', customersRouters);
  router.use('/orders', ordersRouters);
  router.use('/auth', authRouters);
}

module.exports = routerApi;
