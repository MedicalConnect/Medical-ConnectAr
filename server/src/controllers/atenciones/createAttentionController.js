const { Paciente, Atenciones, Doctor } = require("../../db");

const createAttentionController = async ({ doctorId, pacienteId }) => {
  const paciente = await Paciente.findOne({ where: { id: pacienteId } });
  if (!paciente) {
    throw new Error("No existe el paciente");
  }
  const doctor = await Doctor.findOne({ where: { id: doctorId } });
  if (!doctor) {
    throw new Error("No existe el doctor");
  }
  const atencionId = await Atenciones.create({
    DoctorId: doctorId,
    PacienteId: pacienteId,
  });
  return atencionId;
};

module.exports = {
  createAttentionController,
};
