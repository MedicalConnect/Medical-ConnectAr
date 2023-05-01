const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Admin", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    usuario:{
        type:DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    contraseña: {
        type: DataTypes.STRING(),
        allowNull: false,
      },
    },{timestamps:false});
};
