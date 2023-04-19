const {createHistoriaClinica, getHistoriaClinica} = require('../controllers/historiaClinicaController')

const createHistoriaClinicaHandler = async(req, res) => {
    const {
      antecedentes_medicos,
      alergias,
      antecedentes_quirurgicos,
      medicamentos,
      habitos,
      PacienteId,
    } = req.body;
    try {
        const response = await createHistoriaClinica(
          antecedentes_medicos,
          alergias,
          antecedentes_quirurgicos,
          medicamentos,
          habitos,
          PacienteId
        );
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error: error.message})
        
    }
}

const getHistoriaClinicaHandler = async(req, res) => {
    const {PacienteId} = req.params
    try {
        const response = await getHistoriaClinica(PacienteId)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error: error.message})
        
    }
}

module.exports = {
    createHistoriaClinicaHandler,
    getHistoriaClinicaHandler,
}