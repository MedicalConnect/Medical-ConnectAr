const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Atenciones",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
      examen_fisico: {
        type: DataTypes.ENUM("niño", "joven", "adulto", "adulto_mayor"),
        allowNull: false,
      },
      diagnostico: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          not: /^[a-z]+$/i,
        },
      },
      indicaciones_domiciliarias: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      medicamentos: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
        validate: {
          not: /^[a-z]+$/i,
        },
      },
      examenes: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      certificados: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          not: /^[a-z]+$/i,
        },
      },
      rating: {
        type: DataTypes.ENUM("1", "2", "3", "4", "5"),
        allowNull: false,
      },
      contraseña: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: true }
  );
};
