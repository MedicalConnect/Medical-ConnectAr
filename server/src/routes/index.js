const { Router } = require('express');
const { pacientsRoutes } = require('../routes/pacientsRoutes')
const doctorRouter = require('./doctorRoute');
const historiaClinicaRouter = require('./HistoriaClinicaRoute');

// Importar todos los routers;


const mainRouter = Router();

// Configurar los routers

mainRouter.use('/pacients', pacientsRoutes)
mainRouter.use('/doctor', doctorRouter)
mainRouter.use('/historiaClinica', historiaClinicaRouter)




module.exports = mainRouter;