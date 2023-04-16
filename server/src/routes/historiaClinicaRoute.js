const { Router } = require("express");
const {
  createHistoriaClinicaHandler,
  getHistoriaClinicaHandler,
} = require("../handlers/HistoriaClinicaHandler");

const historiaClinicaRouter = Router();

historiaClinicaRouter.get("/:PacienteId", getHistoriaClinicaHandler);
historiaClinicaRouter.post("/", createHistoriaClinicaHandler);

module.exports = historiaClinicaRouter;
