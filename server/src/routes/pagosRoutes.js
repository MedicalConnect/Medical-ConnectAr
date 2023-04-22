const { Router } = require('express');
const { pagosHandler } = require('../handlers/pagos/pagosHandler')

const pagosRouter = Router()
pagosRouter.post('/', pagosHandler);


module.exports = {
    pagosRouter
}