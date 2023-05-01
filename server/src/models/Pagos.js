const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Pagos", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    dni_paciente: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: "pendiente",
    },
  });
};
