'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Recipe.init(
    {
      Name: DataTypes.STRING,
      Category: DataTypes.STRING,
      Picture: DataTypes.STRING,
      Instructions: DataTypes.TEXT,
      Ingredients: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Recipe',
    }
  );
  return Recipe;
};
