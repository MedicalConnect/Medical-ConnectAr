const {Admin} = require("../../db")

const loginAdminController = async ({ usuario, contraseña }) => {
  let user = null;
  user = await Admin.findOne({
    where: {
      contraseña,
      usuario,
    },
  });
  if (!user) {
    throw new Error("No existe el usuario");
  }

  return { ...user.dataValues };
} 


module.exports = loginAdminController