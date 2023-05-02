const {Pagos} = require("../../db")

const putPagoController = async (dni_paciente,status) => {
    const [numRowsUpdated, [updatedPagos]] = await Pagos.update(
        { status: status },
        { where: { dni_paciente: dni_paciente }, returning: true }
      );
    
      if (numRowsUpdated === 0) {
        throw new Error(`No se encontró el pago con el número de documento ${dni_paciente}`);
      }
    
      return `Se actualizo al usuario con el número de documento ${dni_paciente}`;
}

module.exports = putPagoController