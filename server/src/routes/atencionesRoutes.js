const { Router } = require("express");
const atencionesRouter = Router();
const {
  createAttentionHandler,
  getAtencionMedicaHandler,
  createVideocallHandler,
  updateOneFieldAttentionHandler,
  getAttentionHandler,
  getAttentionByIdHandler,
} = require("../handlers/atenciones");
const { sse } = require("./SSE");

// atencionesRouter.get("/:PacienteId", getAtencionMedicaHandler);
atencionesRouter.post("/", createAttentionHandler);
atencionesRouter.post("/videocall/:atencionId", createVideocallHandler);
atencionesRouter.put("/", updateOneFieldAttentionHandler);
atencionesRouter.get("/", getAttentionHandler);
atencionesRouter.get("/videoconsulta/:atencionId", getAttentionByIdHandler);
atencionesRouter.get("/tracker", sse.init);

module.exports = atencionesRouter;
