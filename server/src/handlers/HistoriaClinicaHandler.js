const {
  createHistoriaClinica,
  getAllHistoriaClinica,
  getHistoriaClinica,
  putHistoriaClinica,
} = require("../controllers/historiaClinicaController");

const createHistoriaClinicaHandler = async (req, res) => {
  const { tipo, descripcion, pacienteId } = req.body;
  try {
    const response = await createHistoriaClinica({
      tipo,
      descripcion,
      pacienteId,
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllHistoriaClinicaHandler = async (req, res) => {
  const { pacienteId } = req.params;
  try {
    const response = await getAllHistoriaClinica({ pacienteId });
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getHistoriaClinicaHandler = async (req, res) => {
  const { PacienteId } = req.params;
  try {
    const response = await getHistoriaClinica(PacienteId);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const putHistoriaClinicaHandler = async (req, res) => {
  const {
    antecedentes_medicos,
    antecedentes_quirurgicos,
    alergias,
    medicamentos,
    habitos,
  } = req.body;
  const { id } = req.params;
  try {
    const response = await putHistoriaClinica(
      id,
      antecedentes_medicos,
      antecedentes_quirurgicos,
      alergias,
      medicamentos,
      habitos
    );
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createHistoriaClinicaHandler,
  getAllHistoriaClinicaHandler,
  getHistoriaClinicaHandler,
  putHistoriaClinicaHandler,
};
