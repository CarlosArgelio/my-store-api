'use strict';

const { categorySchema, CATEGORY_TABLE } = require('./../models/categoryModel');
const { productSchema, PRODUCT_TABLE } = require('./../models/productModel');


module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(CATEGORY_TABLE, categorySchema);
    await queryInterface.createTable(PRODUCT_TABLE, productSchema);
  },

  async down (queryInterface,) {
    await queryInterface.dropTable(CATEGORY_TABLE);
    await queryInterface.dropTable(PRODUCT_TABLE);
  }
};
