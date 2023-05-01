const  creatAdminController  = require("../../controllers/admin/createAdminController");

const createAdminHandler = async (req, res) => {
  const {usuario,contraseña} = req.body;

  try {
    const response = await creatAdminController( usuario,contraseña );
    return res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = createAdminHandler
