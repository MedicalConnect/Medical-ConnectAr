const { Doctor } = require("../../db");

const getAvailableDoctorsController = async ({ status }) => {
  const doctors = await Doctor.findAll({ where: { status } });

  return doctors;
};

module.exports = {
  getAvailableDoctorsController,
};
