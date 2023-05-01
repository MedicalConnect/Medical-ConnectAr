const { Doctor, Atenciones } = require("../../db");

const getAvailableDoctorsController = async ({ status }) => {
  const doctors = await Doctor.findAll({
    where: { status },
    include: [
      {
        model: Atenciones,
        attributes: ["rating"],
      },
    ],
  });
  return doctors;
};

module.exports = {
  getAvailableDoctorsController,
};
