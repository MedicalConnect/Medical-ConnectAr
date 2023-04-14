const {Router} = require('express');
const { createDoctorHandler, getDoctorsHandler, getDoctorHandler } = require('../handlers/doctorHandler');
const doctorRouter = Router()

doctorRouter.get('/', getDoctorsHandler)
doctorRouter.get('/:id', getDoctorHandler)
doctorRouter.post('/', createDoctorHandler)

module.exports = doctorRouter;