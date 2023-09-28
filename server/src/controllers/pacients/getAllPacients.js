const { Paciente } = require("../../db.js");

const getAllPacients = async () => {
  const response = await Paciente.findAll({});
  return response;
};

module.exports = { getAllPacients };
