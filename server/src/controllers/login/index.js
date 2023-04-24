const { Paciente, Doctor } = require("../../db");
const { Op } = require("sequelize");
const { hash } = require('../hashContraseñas')
// codeValidUntil: {
//     [Op.or]: [{[Op.gte]: new Date()}, {[Op.is]: null}],
//   },

const loginController = async ({ usuario, contraseña }) => {
  let user = null;
  let rol = "paciente";
  contraseña = hash(contraseña)
  console.log(contraseña)
  user = await Paciente.findOne({
    where: {
      contraseña,
      [Op.or]: [{ email: usuario }, { numero_de_documento: usuario }],
    },
  });
  if (!user) {
    // contraseña = hash(contraseña)
    user = await Doctor.findOne({
      where: {
        contraseña,
        [Op.or]: [{ email: usuario }, { numero_de_documento: usuario }],
      },
    });
    rol = "doctor";
  }
  if (!user) {
    throw new Error("No existe el usuario");
  }
  if (rol === "doctor") {
    await Doctor.update(
      { status: "disponible" },
      {
        where: {
          contraseña,
          [Op.or]: [{ email: usuario }, { numero_de_documento: usuario }],
        },
      }
    );
  }
  return { ...user.dataValues, rol };
};

module.exports = {
  loginController,
};
