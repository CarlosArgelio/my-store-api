const { Model, DataTypes, Sequelize } = require('sequelize');

const { CATEGORY_TABLE } = require('./categoryModel')


const PRODUCT_TABLE = 'products';

const productSchema = {
  id: {
      allowNul: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
  },
  name: {
    allowNul: false,
    type: DataTypes.INTEGER
  },
  image: {
    allowNul: false,
    type: DataTypes.STRING
  },
  description: {
    allowNul: false,
    type: DataTypes.TEXT
  },
  price: {
    allowNul: false,
    type: DataTypes.INTEGER
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  },
  categoryId: {
    field: 'category_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: CATEGORY_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

class Product extends Model {

  static associate(models) {
    this.belongsTo(models.Category, {as: 'category'});
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PRODUCT_TABLE,
      modelName: 'Product',
      timestamps: false
    }
  }
}

module.exports = { PRODUCT_TABLE, productSchema, Product }
