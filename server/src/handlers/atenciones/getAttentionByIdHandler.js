const { getAttentionByIdController } = require("../../controllers/atenciones");

const getAttentionByIdHandler = async (req, res) => {
  const { atencionId } = req.params;
 
  try {
    const response = await getAttentionByIdController({ atencionId });
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
    getAttentionByIdHandler,
};
