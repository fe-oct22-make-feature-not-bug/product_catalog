'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Phone extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Phone.init({
    name: DataTypes.STRING,
    namespaceId: DataTypes.STRING,
    capacityAvailable: DataTypes.ARRAY(DataTypes.STRING),
    capacity: DataTypes.STRING,
    priceRegular: DataTypes.FLOAT,
    priceDiscount: DataTypes.FLOAT,
    colorsAvailable: DataTypes.ARRAY(DataTypes.STRING),
    color: DataTypes.STRING,
    images: DataTypes.ARRAY(DataTypes.STRING),
    description: DataTypes.ARRAY(DataTypes.JSONB),
    screen: DataTypes.STRING,
    resolution: DataTypes.STRING,
    processor: DataTypes.STRING,
    ram: DataTypes.STRING,
    camera: DataTypes.STRING,
    zoom: DataTypes.STRING,
    cell: DataTypes.ARRAY(DataTypes.STRING)
  }, {
    sequelize,
    modelName: 'Phone',
  });
  return Phone;
};
