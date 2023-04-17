const { Router } = require("express");
const { pacientsRoutes } = require("../routes/pacientsRoutes");
const doctorRouter = require("./doctorRoute");
const historiaClinicaRouter = require("./HistoriaClinicaRoute");
const atencionesRouter = require("./atencionesRoutes");

// Importar todos los routers;

const mainRouter = Router();

// Configurar los routers

mainRouter.use("/pacientes", pacientsRoutes);
mainRouter.use("/doctor", doctorRouter);
mainRouter.use("/historiaClinica", historiaClinicaRouter);
mainRouter.use("/atenciones", atencionesRouter);

module.exports = mainRouter;
