const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Atencion_Medica",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      examen_fisico: {
        type: DataTypes.ENUM("joven", "adulto", "adulto_mayor"),
        allowNull: false,
      },
      diagnostico: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      indicaciones_domiciliarias: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      medicamentos: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      examenes: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      certificados: {
        type: DataTypes.ENUM(
          "tipo",
          "indicacion",
          "fecha_de.inicio",
          "duracion"
        ),
        allowNull: false,
      },
      rating: {
        type: DataTypes.ENUM("1", "2", "3", "4", "5"),
        allowNull: false,
      },
    },
    { timestamps: true }
  );
};
