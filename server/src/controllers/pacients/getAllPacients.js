const { Paciente } = require("../../db.js");

const getAllPacients = async () => {

    const res = await Paciente.findAll({})
    return res
}


module.exports = { getAllPacients };
