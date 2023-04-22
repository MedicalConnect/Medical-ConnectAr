const { getAttentionController } = require("../../controllers/atenciones");

const getAttentionHandler = async (req, res) => {
  const { doctorId } = req.params;
  try {
    const response = await getAttentionController({ doctorId });
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAttentionHandler,
};
