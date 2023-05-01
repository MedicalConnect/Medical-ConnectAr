const { Paciente, HistoriaClinica } = require("../db");

const createHistoriaClinica = async ({ tipo, descripcion, pacienteId }) => {
  if (!tipo || !descripcion || !pacienteId)
    throw new Error("Falta informacion requerida");

  const historiaClinica = await HistoriaClinica.create({
    tipo,
    descripcion,
    PacienteId: pacienteId,
  });

  return historiaClinica;
};

const getAllHistoriaClinica = async ({ pacienteId }) => {
  const historiaClinica = await HistoriaClinica.findAll({
    where: { PacienteId: pacienteId },
  });
  return historiaClinica;
};

const getHistoriaClinica = async (PacienteId) => {
  const historiaClinica = await HistoriaClinica.findOne({
    where: { PacienteId: PacienteId },
    include: [Paciente],
  });
  if (!historiaClinica) throw Error("Este paciente no tiene historia clinica");
  return historiaClinica;
};

const putHistoriaClinica = async (
  id,
  antecedentes_medicos,
  antecedentes_quirurgicos,
  alergias,
  medicamentos,
  habitos
) => {
  if (
    !antecedentes_medicos ||
    !antecedentes_quirurgicos ||
    !alergias ||
    !medicamentos ||
    !habitos
  )
    throw new Error("Falta informacion requerida");

  await HistoriaClinica.update(
    {
      antecedentes_medicos: antecedentes_medicos,
      antecedentes_quirurgicos: antecedentes_quirurgicos,
      alergias: alergias,
      medicamentos,
      habitos: habitos,
    },
    {
      where: {
        id: id,
      },
    }
  );
  return "Datos actualizados con exito";
};

module.exports = {
  createHistoriaClinica,
  getAllHistoriaClinica,
  getHistoriaClinica,
  putHistoriaClinica,
};
