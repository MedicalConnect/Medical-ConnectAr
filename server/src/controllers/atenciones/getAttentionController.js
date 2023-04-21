const { Atenciones } = require("../../db");

const getAttentionController = async ({ pacienteId }) => {
  try {
    const atencion = await Atenciones.findOne({
      where: { PacienteId: pacienteId, status: "enespera" },
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
