const { Router } = require("express");
const {
  createDoctorHandler,
  getDoctorsHandler,
  getDoctorHandler,
  updateDoctorHandler,
} = require("../handlers/doctorHandler");
const { validateDoctor } = require("../middlewares/validateDoctor");
const { getAvailableDoctorsHandler } = require("../handlers/doctor");
const userStatusHandler = require("../handlers/doctor/userStatusHandler")


const doctorRouter = Router();

doctorRouter.get("/", getDoctorsHandler);
doctorRouter.get("/:id", getDoctorHandler);
doctorRouter.post("/", validateDoctor, createDoctorHandler);
doctorRouter.put("/", validateDoctor, updateDoctorHandler);
doctorRouter.get("/status/:status", getAvailableDoctorsHandler);

doctorRouter.put('/userstatus', userStatusHandler);

module.exports = doctorRouter;
