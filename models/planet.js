'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Planet extends Model {
    static associate(models) {
      models.Planet.belongsToMany(models.Star, { through: 'StarsPlanets' });
    }
  }
  Planet.init({
    name: DataTypes.STRING,
    size: DataTypes.INTEGER, 
    description: DataTypes.TEXT,
    isGasGiant: DataTypes.BOOLEAN,
    type: DataTypes.STRING,
    starId: DataTypes.INTEGER,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Planet',
  });
  return Planet;
};