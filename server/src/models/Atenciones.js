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
      anamnesis: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      examen_fisico: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      diagnostico: {
        type: DataTypes.STRING,
        allowNull: false,
        },
      diagnostico_clinico: {
        type: DataTypes.STRING,
        allowNull: false,
        },
      indicaciones_domiciliarias: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      indicaciones_domiciliarias_tipo: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      indicaciones_domiciliarias_detalle: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      indicaciones_domiciliarias_comentarios: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      medicamento: {
        type: DataTypes.TEXT,
        allowNull: false,
        },
      dosis: {
        type: DataTypes.TEXT,
        allowNull: false,
        },
      via: {
        type: DataTypes.TEXT,
        allowNull: false,
        },
      frecuencia: {
        type: DataTypes.TEXT,
        allowNull: false,
        },
      duracion: {
        type: DataTypes.TEXT,
        allowNull: false,
        },
      examen_medico: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      tipo_certificado: {
        type: DataTypes.STRING,
        allowNull: false,
        },
      tipo_indicacion_certificado: {
        type: DataTypes.STRING,
        allowNull: false,
        },
      certificado_fecha_inicio: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          not: "^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$"
        },
      
        certificado_duracion: {
          type: DataTypes.STRING,
          allowNull: false,
          
        },
        certificado_lugar: {
          type: DataTypes.STRING,
          allowNull: false,
          },
      },
      rating: {
        type: DataTypes.ENUM("1", "2", "3", "4", "5"),
        allowNull: false,
      },
    },
    { timestamps: true }
  );
};
