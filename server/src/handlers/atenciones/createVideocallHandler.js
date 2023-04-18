const { createVideocallController } = require("../../controllers/atenciones");

const createVideocallHandler = async (req, res) => {
  const { atencionId } = req.params;
  try {
    const response = await createVideocallController(atencionId);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createVideocallHandler,
};
