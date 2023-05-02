const putPagoController = require("../../controllers/pagos/putPagoController")

const putPagoHandler = async (req,res) => {
    const {dni_paciente,status} = req.body;
  try {
    const response = await putPagoController(dni_paciente,status);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}


module.exports = putPagoHandler