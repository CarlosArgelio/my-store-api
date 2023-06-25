'use strict';

const { CUSTOMER_TABLE } = require('./../models/customerModel');

const { DataTypes } = require('sequelize');

module.exports = {
  async up (queryInterface) {
    await queryInterface.changeColumn(CUSTOMER_TABLE, 'user_id', {
      allowNull: false,
      type: DataTypes.INTEGER,
      unique: true
    });
  },
}
//   async down (queryInterface) {
//     // await queryInterface.dropTable(CUSTOMER_TABLE);
//   }
// };
