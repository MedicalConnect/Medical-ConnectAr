const { getAllPacients } = require('../../controllers/pacients/getAllPacients')

const handlerAllPacients = async (req, res) => {
    try {
        const response = await getAllPacients();
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    handlerAllPacients
}