const  getAllAdminsController  = require('../../controllers/admin/getAllAdminsController')

const getAllAdminsHandler = async (req, res) => {
    try {
        const response = await getAllAdminsController();
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = getAllAdminsHandler
