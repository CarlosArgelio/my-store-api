'use strict';

const { PRODUCT_TABLE } = require('./../models/productModel');

const { DataTypes } = require('sequelize');

module.exports = {
  async up (queryInterface) {
    await queryInterface.changeColumn(PRODUCT_TABLE, 'name', {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true
    });
  },
}
