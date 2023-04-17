const { Paciente, Atenciones } = require("../db");

const createAtencionMedica = async (param) => {
  const {
    anamnesis,
    examen_fisico,
    diagnostico,
    diagnostico_clinico,
    indicaciones_domiciliarias,
    indicaciones_domiciliarias_tipo,
    indicaciones_domiciliarias_detalle,
    indicaciones_domiciliarias_comentarios,
    medicamento,
    dosis,
    via,
    frecuencia,
    duracion,
    examen_medico,
    tipo_certificado,
    tipo_indicacion_certificado,
    certificado_fecha_inicio,
    rating,
  } = param;
  console.log([param]);
  const AtencionMedica = await Atenciones.create({
    anamnesis,
    examen_fisico,
    diagnostico,
    diagnostico_clinico,
    indicaciones_domiciliarias,
    indicaciones_domiciliarias_tipo,
    indicaciones_domiciliarias_detalle,
    indicaciones_domiciliarias_comentarios,
    medicamento,
    dosis,
    via,
    frecuencia,
    duracion,
    examen_medico,
    tipo_certificado,
    tipo_indicacion_certificado,
    certificado_fecha_inicio,
    rating,
  });
  return `Datos modificados correctamente `;
};

const getAtencionMedica = async (PacienteId) => {
  const getAtencionMedica = await getAtencionMedica.findOne({
    where: { PacienteId: PacienteId },
    include: [Paciente],
  });
  if (!AtencionMedica) throw Error("Este paciente no tiene historia clinica");
  return AtencionMedica;
};

module.exports = {
  createAtencionMedica,
  getAtencionMedica,
};
