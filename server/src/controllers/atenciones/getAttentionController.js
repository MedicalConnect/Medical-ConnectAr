const { Atenciones, Paciente, Doctor } = require("../../db");
const { Op } = require("sequelize");

const getAttentionController = async ({ doctorId, pacienteId }) => {
  try {
    let query = {};
    if (doctorId) {
      query.DoctorId = doctorId;
    }
    if (pacienteId) {
      query.PacienteId = pacienteId;
    }
    const atencion = await Atenciones.findAll({
      where: query,
      include: [Paciente, Doctor],
      order: [["createdAt", "DESC"]],
    });
    if (!atencion) {
      throw new Error("No existe la atencion");
    }
    return atencion;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAttentionController,
};
