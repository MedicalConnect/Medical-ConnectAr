const { Router } = require("express");
const atencionesRouter = Router();
const {
  putAtencionMedicaHandler,
  getAtencionMedicaHandler,
} = require("../handlers/AtencionesHandler");

atencionesRouter.get("/", getAtencionMedicaHandler);
atencionesRouter.put("/", putAtencionMedicaHandler);

module.exports = atencionesRouter;
