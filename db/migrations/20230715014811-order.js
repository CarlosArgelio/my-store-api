'use strict';

const { orderSchema, ORDER_TABLE } = require('./../models/orderModel');

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(ORDER_TABLE, orderSchema);
  },

  async down (queryInterface,) {
    await queryInterface.dropTable(ORDER_TABLE);
  }
};
