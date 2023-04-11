const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('a', {
     name: {
        type: DataTypes.STRING,
        allowNull: false
     }
    })}