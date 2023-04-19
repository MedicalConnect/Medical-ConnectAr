const { Paciente, HistoriaClinica } = require("../db");

const createHistoriaClinica = async (
  antecedentes_medicos,
  antecedentes_quirurgicos,
  alergias,
  medicamentos,
  habitos,
  PacienteId
) => {
  if(
  !antecedentes_medicos ||
  !antecedentes_quirurgicos ||
  !alergias ||
  !medicamentos ||
  !habitos
  )
    throw new Error("Falta informacion requerida");



  const historiaClinica = await HistoriaClinica.create({
    antecedentes_medicos,
    antecedentes_quirurgicos,
    alergias,
    medicamentos,
    habitos,
    PacienteId,
  });
  // const paciente = await Paciente.findOne({
  //   where: {
  //     id: PacienteId
  //   }
  // })
  //historiaClinica.addPaciente(paciente)

  return "Historia clinica creada";
};

const getAllHistoriaClinica = async () => {
  const historiaClinica = await HistoriaClinica.findAll({
    include: [Paciente],
  });
  if (historiaClinica.length === 0) throw Error("No hay historias clinicas");
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

const putHistoriaClinica = async (id, antecedentes_medicos, antecedentes_quirurgicos, alergias, medicamentos, habitos) => {
  if(!antecedentes_medicos || !antecedentes_quirurgicos || !alergias || !medicamentos || !habitos)
      throw new Error("Falta informacion requerida");

  await HistoriaClinica.update({
    antecedentes_medicos: antecedentes_medicos,
    antecedentes_quirurgicos: antecedentes_quirurgicos,
    alergias: alergias,
    medicamentos,
    habitos: habitos,
  }, {
      where: {
          id : id
      }
  });
return ('Datos actualizados con exito')
}


module.exports = {
  createHistoriaClinica,
  getAllHistoriaClinica,
  getHistoriaClinica,
  putHistoriaClinica
};
