const { Router } = require("express");
const {
  createHistoriaClinicaHandler,
  getHistoriaClinicaHandler,
  putHistoriaClinicaHandler,
  getAllHistoriaClinicaHandler
} = require("../handlers/HistoriaClinicaHandler");

const historiaClinicaRouter = Router();

historiaClinicaRouter.get("/", getAllHistoriaClinicaHandler);
historiaClinicaRouter.get("/", getHistoriaClinicaHandler);
historiaClinicaRouter.post("/", createHistoriaClinicaHandler);
historiaClinicaRouter.put("/", putHistoriaClinicaHandler);

module.exports = historiaClinicaRouter;
