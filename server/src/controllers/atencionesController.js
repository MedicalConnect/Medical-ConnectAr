const {Paciente, Atenciones} = require("../db");

const createAtencionMedica = async (
  anamnesis,
  examen_fisico,
  diagnostico,
  indicaciones_domiciliarias,
  medicamentos,
  examenes,
  certificados,
  rating
) => {
  const AtencionMedica = await AtencionMedica.create({anamnesis,
  examen_fisico,
  diagnostico,
  indicaciones_domiciliarias,
  medicamentos,
  examenes,
  certificados,
  rating
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
}