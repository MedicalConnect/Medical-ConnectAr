const { Router } = require("express");
const {
  createHistoriaClinicaHandler,
  getAllHistoriaClinicaHandler,
} = require("../handlers/HistoriaClinicaHandler");

const historiaClinicaRouter = Router();

historiaClinicaRouter.get("/:pacienteId", getAllHistoriaClinicaHandler);
historiaClinicaRouter.post("/", createHistoriaClinicaHandler);

module.exports = historiaClinicaRouter;
