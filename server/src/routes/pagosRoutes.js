const { Router } = require('express');
const { pagosHandler } = require('../handlers/pagos/pagosHandler')
const { createPagos } = require('../handlers/pagos/createPagos')
const { getAllpagos } = require('../handlers/pagos/getAllpagos')
const putPagoHandler = require ("../handlers/pagos/putPagoHandler")

const pagosRouter = Router()
pagosRouter.post('/', pagosHandler);
pagosRouter.post('/modelPago', createPagos);
pagosRouter.get('/', getAllpagos);
pagosRouter.put("/",putPagoHandler);

module.exports = {
    pagosRouter
}