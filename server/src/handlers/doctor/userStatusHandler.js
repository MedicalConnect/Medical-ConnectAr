const  putUserStatus  = require("../../controllers/doctor/putUserStatusController");

const userStatusHandler = async (req, res) => {
  const {numero_de_documento,status_cuenta} = req.body;
  try {
    const response = await putUserStatus(numero_de_documento,status_cuenta);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = userStatusHandler
