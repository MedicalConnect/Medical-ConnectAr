const { Router } = require("express");
const { pacientsRoutes } = require("../routes/pacientsRoutes");
const { pagosRouter } = require("./pagosRoutes");
const doctorRouter = require("./doctorRoute");
const historiaClinicaRouter = require("./historiaClinicaRoute");
const atencionesRouter = require("./atencionesRoutes");
const loginRouter = require("./loginRoutes");
const adminRouter = require("./adminRoutes");
const googleStorageRouter = require("./googleStorageRouter");

// Importar todos los routers;

const mainRouter = Router();

// Configurar los routers

mainRouter.use("/pacientes", pacientsRoutes);
mainRouter.use("/doctor", doctorRouter);
mainRouter.use("/historiaClinica", historiaClinicaRouter);
mainRouter.use("/atenciones", atencionesRouter);
mainRouter.use("/login", loginRouter);
mainRouter.use("/pagos", pagosRouter);
mainRouter.use("/admin", adminRouter);
mainRouter.use("/storage/:pacienteId", googleStorageRouter);

module.exports = mainRouter;
