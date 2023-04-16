const {
  createAtencionMedica,
  getAtencionMedica,
} = require("../controllers/atencionesController");

const createAtencionMedicaHandler = async (req, res) => {
  const {
    anamnesis,
    examen_fisico,
    diagnostico,
    indicaciones_domiciliarias,
    medicamentos,
    examenes,
    certificados,
    rating,
  } = req.body;
  try {
    const response = await createAtencionMedica(
      anamnesis,
      examen_fisico,
      diagnostico,
      indicaciones_domiciliarias,
      medicamentos,
      examenes,
      certificados,
      rating
    );
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
