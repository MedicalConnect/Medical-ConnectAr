const { Paciente } = require("../../db.js");

const getAllPacients = async () => {
  const res = Paciente.findAll({});
  return res;
};

module.exports = { getAllPacients };
