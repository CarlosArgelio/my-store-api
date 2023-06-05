const productsRouters = require('./productsRouters');
const usersRouters = require('./usersRouters');
const categoriesRouters = require('./categoriesRouters');

function routerApi(app) {
  app.use('/products', productsRouters)
  app.use('/users', usersRouters)
  app.use('/categories', categoriesRouters)
}

module.exports = routerApi;
