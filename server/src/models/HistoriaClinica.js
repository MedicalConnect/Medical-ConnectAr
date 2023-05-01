const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("HistoriaClinica", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    tipo: {
      type: DataTypes.ENUM(
        "antecendes medicos",
        "medicamentos",
        "alergia",
        "habitos"
      ),
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
