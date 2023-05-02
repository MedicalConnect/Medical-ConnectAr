const { Pagos } = require("../../db");

const getAllpagos = async (req, res) => {
    try {
        const response = await Pagos.findAll({})
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = { getAllpagos };
