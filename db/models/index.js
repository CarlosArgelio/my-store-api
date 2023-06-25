const { User, UserSchema } = require('./userModel');
const { Customer, customerSchema } = require('./customerModel');
const { Category, categorySchema } = require('./categoryModel');
const { Product, productSchema } = require('./productModel');

function setUpModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Customer.init(customerSchema, Customer.config(sequelize));
  Category.init(categorySchema, User.config(sequelize));
  Product.init(productSchema, Customer.config(sequelize));

  User.associate(sequelize.models);
  Customer.associate(sequelize.models);
  Category.associate(sequelize.models);
  Product.associate(sequelize.models);
}

module.exports = setUpModels;
