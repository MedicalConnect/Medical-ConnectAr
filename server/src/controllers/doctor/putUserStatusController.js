const {Doctor} = require("../../db")

// const putUserStatus= async (numero_de_documento,status_cuenta) =>{
//   await Doctor.update({
//     status_cuenta:status_cuenta
//   },{
//     where : {
//         numero_de_documento:numero_de_documento
//     }
//   })
// };

const putUserStatus = async (numero_de_documento, status_cuenta) => {
  const [numRowsUpdated, [updatedDoctor]] = await Doctor.update(
    { status_cuenta: status_cuenta },
    { where: { numero_de_documento: numero_de_documento }, returning: true }
  );

  if (numRowsUpdated === 0) {
    throw new Error(`No se encontró al usuario con el número de documento ${numero_de_documento}`);
  }

  return `Se actualizo al usuario con el número de documento ${numero_de_documento}`;
};

module.exports = putUserStatus