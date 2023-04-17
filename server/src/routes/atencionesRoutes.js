const { Router } = require("express");
const atencionesRouter = Router();
const {
  createAtencionMedicaHandler,
  getAtencionMedicaHandler,
} = require("../handlers/AtencionesHandler");

atencionesRouter.get("/:PacienteId", getAtencionMedicaHandler);
atencionesRouter.post("/", createAtencionMedicaHandler);

module.exports = atencionesRouter;
