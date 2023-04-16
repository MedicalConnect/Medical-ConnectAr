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
        validate: {
          not: /^[a-z]+$/i,
        },
      },
      diagnostico_clinico: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          not: /^[a-z]+$/i,
        },
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
        validate: {
          not: /^[a-z]+$/i,
        },
      },
      dosis: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          not: /^[a-z]+$/i,
        },
      },
      via: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          not: /^[a-z]+$/i,
        },
      },
      frecuencia: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          not: /^[a-z]+$/i,
        },
      },
      duracion: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          not: /^[a-z]+$/i,
        },
      },
      examen_medico: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      tipo_certificado: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          not: /^[a-z]+$/i,
        },
      },
      tipo_indicacion_certificado: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          not: /^[a-z]+$/i,
        },
      },
      certificado_fecha_inicio: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          not: /^[a-z]+$/i,
        },
        certificado_duracion: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            not: /^[a-z]+$/i,
          },
        },
        certificado_lugar: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            not: /^[a-z]+$/i,
          },
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
