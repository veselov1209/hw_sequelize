'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Check extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Check.init({
    productId: DataTypes.INTEGER,
    orderId: DataTypes.INTEGER,
    totalProduct: DataTypes.INTEGER,
    orderPrice: DataTypes.REAL
  }, {
    sequelize,
    modelName: 'Check',
  });
  return Check;
};