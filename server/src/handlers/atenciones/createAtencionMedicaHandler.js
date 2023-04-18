const { createAttentionController } = require("../../controllers/atenciones");

const createAttentionHandler = async (req, res) => {
  const { pacienteId, doctorId } = req.body;
  try {
    const response = await createAttentionController({ pacienteId, doctorId });
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createAttentionHandler,
};
