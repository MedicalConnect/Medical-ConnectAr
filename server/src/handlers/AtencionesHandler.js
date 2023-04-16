const {
  putAtencionMedica,
  getAtencionMedica,
} = require("../controllers/atencionesController");

const putAtencionMedicaHandler = async (req, res) => {
  const {
    examen_fisico,
    diagnostico,
    indicaciones_domiciliarias,
    medicamentos,
    examenes,
    certificados,
    numero_de_documento,
  } = req.body;
  try {
    const response = await putAtencionMedica(
      examen_fisico,
      diagnostico,
      indicaciones_domiciliarias,
      medicamentos,
      examenes,
      certificados,
      numero_de_documento
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
  putAtencionMedicaHandler,
  getAtencionMedicaHandler,
};
