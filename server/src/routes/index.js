const { Router } = require('express');
const { pacientsRoutes } = require('../routes/pacientsRoutes')
// Importar todos los routers;


const mainRouter = Router();
mainRouter.use('/pacients', pacientsRoutes)

module.exports = mainRouter;