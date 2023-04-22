const { Atenciones, Paciente } = require("../../db");
const { Op } = require("sequelize");

const getAttentionController = async ({ doctorId }) => {
  try {
    const atencion = await Atenciones.findAll({
      where: {
        DoctorId: doctorId,
      },
      include: [Paciente],
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
