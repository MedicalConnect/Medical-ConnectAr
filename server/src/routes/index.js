const { Router } = require('express');
const doctorRouter = require('./doctorRoute');
const historiaClinicaRouter = require('./HistoriaClinicaRoute');

// Importar todos los routers;

const mainRouter = Router();

// Configurar los routers

mainRouter.use('/doctor', doctorRouter)
mainRouter.use('/historiaClinica', historiaClinicaRouter)




module.exports = mainRouter;