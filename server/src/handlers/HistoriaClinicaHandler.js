const {createHistoriaClinica, getAllHistoriaClinica, getHistoriaClinica, putHistoriaClinica} = require('../controllers/historiaClinicaController')

const createHistoriaClinicaHandler = async(req, res) => {
    const { medicalHistory, allergies, medicines, habits, description, PacienteId} = req.body
    try {
        const response = await createHistoriaClinica(medicalHistory, allergies, medicines, habits, description, PacienteId)
        res.status(200).json(response)
    } catch (error) {
        console.log(error)
        res.status(400).json({error: error.message})
        
    }
}

const getAllHistoriaClinicaHandler = async (req, res) => {
try {
    const response = await getAllHistoriaClinica();
    res.status(200).json(response);
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


const putHistoriaClinicaHandler = async(req, res) => {
    const { medicalHistory, allergies, medicines, habits, description } = req.body
    const { id } = req.params
    try {
        const response = await putHistoriaClinica(id, medicalHistory, allergies, medicines, habits, description)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error: error.message})
        
    }
}

module.exports = {
    createHistoriaClinicaHandler,
    getAllHistoriaClinicaHandler,
    getHistoriaClinicaHandler,
    putHistoriaClinicaHandler
}