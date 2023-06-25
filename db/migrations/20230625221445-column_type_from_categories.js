'use strict';

const { CATEGORY_TABLE } = require('./../models/categoryModel');

const { DataTypes } = require('sequelize');

module.exports = {
  async up (queryInterface) {
    await queryInterface.changeColumn(CATEGORY_TABLE, 'name', {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true
    });
  },
}
