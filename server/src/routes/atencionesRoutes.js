const { Router } = require("express");
const atencionesRouter = Router();
const {
  createAttentionHandler,
  getAtencionMedicaHandler,
  createVideocallHandler,
  updateOneFieldAttentionHandler,
} = require("../handlers/atenciones");

atencionesRouter.get("/:PacienteId", getAtencionMedicaHandler);
atencionesRouter.post("/", createAttentionHandler);
atencionesRouter.post("/videocall/:atencionId", createVideocallHandler);
atencionesRouter.put("/", updateOneFieldAttentionHandler);

module.exports = atencionesRouter;
