const { createAttentionController } = require("../../controllers/atenciones");
const { sse } = require("../../routes/SSE");

const createAttentionHandler = async (req, res) => {
  const { pacienteId, doctorId } = req.body;
  try {
    const response = await createAttentionController({ pacienteId, doctorId });
    sse.send({
      pacienteId,
      doctorId,
      atencionId: response.id,
      action: "CREATE_ATTENTION",
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createAttentionHandler,
};
