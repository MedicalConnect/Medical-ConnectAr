const {Admin} = require("../../db")

const creatAdminController = async (usuario,contraseña) => await Admin.create({usuario,contraseña})


module.exports= creatAdminController