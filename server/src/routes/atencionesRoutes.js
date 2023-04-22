const { Router } = require("express");
const atencionesRouter = Router();
const {
  createAttentionHandler,
  getAtencionMedicaHandler,
  createVideocallHandler,
  updateOneFieldAttentionHandler,
  getAttentionHandler,
} = require("../handlers/atenciones");

atencionesRouter.get("/:PacienteId", getAtencionMedicaHandler);
atencionesRouter.post("/", createAttentionHandler);
atencionesRouter.post("/videocall/:atencionId", createVideocallHandler);
atencionesRouter.put("/", updateOneFieldAttentionHandler);
atencionesRouter.get("/enespera/:doctorId", getAttentionHandler);

module.exports = atencionesRouter;
