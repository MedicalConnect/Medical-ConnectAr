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
      },
      examen_fisico: {
        type: DataTypes.STRING,
      },
      diagnostico: {
        type: DataTypes.JSONB,
        defaultValue: [], // [{CIE-10, diagnostico, diagnostico clinico}]
      },
      indicaciones_domiciliarias: {
        type: DataTypes.JSONB,
        defaultValue: [], // [{tipo, detalle, comentario}]
      },
      medicamentos: {
        type: DataTypes.JSONB,
        defaultValue: [], // [{medicamento, dosis, via, frecuencia, duracion, indicacionAdicional}]
      },
      solicitud_examenes: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        defaultValue: [],
      },
      certificados: {
        type: DataTypes.JSONB,
        defaultValue: [], // [{tipo_certificado, tipo_indicacion, fecha_inicio, duracion, lugar_presentacion}]
      },
      rating: {
        type: DataTypes.ENUM("0", "1", "2", "3", "4", "5"),
        defaultValue: "0",
      },
      videocall_url: {
        type: DataTypes.STRING,
      },
      videocall_is_active: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      status: {
        type: DataTypes.ENUM("enespera", "encurso", "finalizada", "cancelada"),
        defaultValue: "enespera",
      },
    },
    { timestamps: true }
  );
};
