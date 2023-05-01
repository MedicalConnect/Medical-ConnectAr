const { getAllPacients } = require('../../controllers/pacients/getAllPacients')
const searchPacientByName = require("../../controllers/pacients/searchPacientByName")

const handlerAllPacients = async (req, res) => {
    const {numero_de_documento}= req.query;
    try {
        const response = numero_de_documento ? await searchPacientByName(numero_de_documento) : await getAllPacients();
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    handlerAllPacients
}