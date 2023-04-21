const { Router } = require("express");
const {
  handlerAllPacients,
} = require("../handlers/pacients/handlerAllPacients");
const {
  handlerCreatePacients,
} = require("../handlers/pacients/handlerCreatePacients");
const {
  handlerPutPacients,
} = require("../handlers/pacients/handlerPutPacients");
const { validatePaciente } = require("../middlewares/validatePaciente");

const pacientsRoutes = Router();

pacientsRoutes.get("/", handlerAllPacients);
pacientsRoutes.post("/", validatePaciente, handlerCreatePacients);
pacientsRoutes.put("/", validatePaciente, handlerPutPacients);


module.exports = {
  pacientsRoutes,
};
