const { User, UserSchema } = require('./userModel')
const { Customer, customerSchema } = require('./customerModel')

function setUpModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Customer.init(customerSchema, Customer.config(sequelize));

  User.associate(sequelize.models);
  Customer.associate(sequelize.models);
}

module.exports = setUpModels;
