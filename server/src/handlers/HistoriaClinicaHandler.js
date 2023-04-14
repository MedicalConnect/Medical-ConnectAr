const {createHistoriaClinica, getHistoriaClinica} = require('../controllers/historiaClinicaController')

const createHistoriaClinicaHandler = async(req, res) => {
    const {medicalHistory, allergies, medicines, habits, description, PacienteId} = req.body
    try {
        const response = await createHistoriaClinica(medicalHistory, allergies, medicines, habits, description, PacienteId)
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