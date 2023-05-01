const  loginAdminController = require("../../controllers/admin/loginAdminController");

const loginAdminHandler = async (req, res) => {
  const { usuario, contraseña } = req.body;
  try {
    const response = await loginAdminController({ usuario, contraseña });
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports= loginAdminHandler;