const { Router } = require('express');
const { handlerAllPacients } = require('../handlers/pacients/handlerAllPacients')
const { handlerCreatePacients } = require('../handlers/pacients/handlerCreatePacients')
//const { handlerPutPacients } = require('../handlers/pacients/handlerPutPacients')
const { handlerPutPacients } = require('../handlers/pacients/handlerPutPacients')
const pacientsRoutes = Router()

pacientsRoutes.get('/', handlerAllPacients);
pacientsRoutes.post('/', handlerCreatePacients)
//pacientsRoutes.put('/', handlerPutPacients)

module.exports = {
    pacientsRoutes
}