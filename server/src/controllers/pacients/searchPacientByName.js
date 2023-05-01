const {Paciente} = require("../../db")
const {Op} = require ("sequelize")

const searchPacientByName = async (numero_de_documento) =>{
    const userPacient= await Paciente.findOne( { where : { numero_de_documento: {[Op.iLike]: `%${numero_de_documento}%`},},});
    return userPacient
  }

module.exports = searchPacientByName