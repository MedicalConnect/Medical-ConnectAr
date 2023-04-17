const { getAtencionMedica } = require("../../controllers/atencionesController");

const getAtencionMedicaHandler = async (req, res) => {
  const { PacienteId } = req.params;
  try {
    const response = await getAtencionMedica(PacienteId);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAtencionMedicaHandler,
};
