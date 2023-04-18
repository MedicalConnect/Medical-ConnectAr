const { loginController } = require("../../controllers/login");

const loginHandler = async (req, res) => {
  const { usuario, contraseña } = req.body;
  try {
    const response = await loginController({ usuario, contraseña });
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  loginHandler,
};
