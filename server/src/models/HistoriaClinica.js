const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("HistoriaClinica", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    antecedentes_medicos: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "no tengo antecedentes medicos",
    },
    antecedentes_quirurgicos: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "no tengo antecedentes quirurgicos",
    },
    alergias: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "no tengo alergias",
    },

    medicamentos: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "no estoy tomando medicamentos",
    },

    habitos: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
