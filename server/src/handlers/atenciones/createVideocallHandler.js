const { createVideocallController } = require("../../controllers/atenciones");
const { sse } = require("../../routes/SSE");

const createVideocallHandler = async (req, res) => {
  const { atencionId } = req.params;
  try {
    const response = await createVideocallController(atencionId);
    sse.send({
      pacienteId: null,
      doctorId: null,
      atencionId: atencionId,
      action: "CREATE_VIDEOCALL",
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createVideocallHandler,
};
