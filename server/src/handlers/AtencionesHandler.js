const {
  createAtencionMedica,
  getAtencionMedica,
} = require("../controllers/atencionesController");

const createAtencionMedicaHandler = async (req, res) => {
  try {
    const response = await createAtencionMedica(req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

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
  createAtencionMedicaHandler,
  getAtencionMedicaHandler,
};
