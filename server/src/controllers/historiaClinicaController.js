const { Paciente, HistoriaClinica } = require("../db");

const createHistoriaClinica = async (
  medicalHistory,
  allergies,
  medicines,
  habits,
  description,
  PacienteId
) => {

  const historiaClinica = await HistoriaClinica.create({
    medicalHistory,
    allergies,
    medicines,
    habits,
    description,
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

const putHistoriaClinica = async (id, medicalHistory, allergies, medicines, habits, description) => {
  await HistoriaClinica.update({
      medicalHistory: medicalHistory,
      allergies: allergies,
      medicines: medicines,
      habits: habits,
      description: description,
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
