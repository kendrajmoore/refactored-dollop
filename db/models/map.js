'use strict';
module.exports = (sequelize, DataTypes) => {
  const Map = sequelize.define('Map', {
    creator: DataTypes.STRING,
    creatorUrl: DataTypes.STRING,
    mission: DataTypes.TEXT,
    goalOne: DataTypes.STRING,
    goalTwo: DataTypes.STRING,
    goalThree: DataTypes.STRING,
    goalFour: DataTypes.STRING,
    goalFive: DataTypes.STRING
  }, {});
  Map.associate = function(models) {
    // associations can be defined here
  };
  return Map;
};