const {
  updateOneFieldAttentionController,
} = require("../../controllers/atenciones");
const { sse } = require("../../routes/SSE");

const updateOneFieldAttentionHandler = async (req, res) => {
  const { atencionId, data, field } = req.body;
  try {
    const response = await updateOneFieldAttentionController({
      atencionId,
      data,
      field,
    });

    if (field === "videocall_is_active") {
      sse.send({
        pacienteId: null,
        doctorId: null,
        atencionId: atencionId,
        action: "UPDATE_VIDEOCALL",
      });
    }
    if (field === "status") {
      sse.send({
        pacienteId: null,
        doctorId: null,
        atencionId: atencionId,
        action: "CHANGE_STATUS_ATENCION",
      });
    }

    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  updateOneFieldAttentionHandler,
};
