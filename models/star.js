'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Star extends Model {
      static associate(models) {
      models.Star.belongsTo(models.Galaxy); 
      models.Star.belongsToMany(models.Planet, { through: 'StarsPlanets' });
    }
  }
  Star.init({
    name: DataTypes.STRING,
    size: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    GalaxyId: DataTypes.INTEGER,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Star',
  });
  return Star;
};