const {
  updateOneFieldAttentionController,
} = require("../../controllers/atenciones");

const updateOneFieldAttentionHandler = async (req, res) => {
  const { atencionId, data, field } = req.body;
  try {
    const response = await updateOneFieldAttentionController({
      atencionId,
      data,
      field,
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  updateOneFieldAttentionHandler,
};
