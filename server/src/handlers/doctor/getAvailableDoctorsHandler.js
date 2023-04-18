const { getAvailableDoctorsController } = require("../../controllers/doctor");

const getAvailableDoctorsHandler = async (req, res) => {
  const { status } = req.params;
  try {
    console.log("11111111111111111");
    const response = await getAvailableDoctorsController({ status });
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAvailableDoctorsHandler,
};
