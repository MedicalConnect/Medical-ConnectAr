const { Router } = require('express');
const { pagosHandler } = require('../handlers/pagos/pagosHandler')
const { createPagos } = require('../handlers/pagos/createPagos')
const { getAllpagos } = require('../handlers/pagos/getAllpagos')

const pagosRouter = Router()
pagosRouter.post('/', pagosHandler);
pagosRouter.post('/modelPago', createPagos);
pagosRouter.get('/', getAllpagos);

module.exports = {
    pagosRouter
}