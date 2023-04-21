const { Router } = require("express");
const {
  createHistoriaClinicaHandler,
  getHistoriaClinicaHandler,
  putHistoriaClinicaHandler,
  getAllHistoriaClinicaHandler
} = require("../handlers/HistoriaClinicaHandler");

const historiaClinicaRouter = Router();

historiaClinicaRouter.get("/", getAllHistoriaClinicaHandler);
historiaClinicaRouter.get("/:PacienteId", getHistoriaClinicaHandler);
historiaClinicaRouter.post("/", createHistoriaClinicaHandler);
historiaClinicaRouter.put("/:id", putHistoriaClinicaHandler);

module.exports = historiaClinicaRouter;
