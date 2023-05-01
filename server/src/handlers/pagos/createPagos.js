const { Pagos } = require("../../db.js");

const createPagos = async (req, res) => {
    const   {dni_paciente}  = req.body
    console.log(dni_paciente)

    try {
         const newPago = Pagos.create({
          dni_paciente: dni_paciente,
          status: 'pendiente'
        })
        return res.status(200).send("Pago cargado exitosamente");
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
    };
  
  
  module.exports = {
      createPagos
  }