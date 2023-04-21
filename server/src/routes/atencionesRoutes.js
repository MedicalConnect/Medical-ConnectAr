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

atencionesRouter.get("/:PacienteId", getAtencionMedicaHandler);
atencionesRouter.post("/", createAttentionHandler);
atencionesRouter.post("/videocall/:atencionId", createVideocallHandler);
atencionesRouter.put("/", updateOneFieldAttentionHandler);
atencionesRouter.get("/encurso/:pacienteId", getAttentionHandler);
atencionesRouter.get("/videoconsulta/:atencionId", getAttentionByIdHandler);


module.exports = atencionesRouter;
