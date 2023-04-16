const {Router} = require('express');
const { createDoctorHandler, getDoctorsHandler, getDoctorHandler, updateDoctorHandler } = require('../handlers/doctorHandler');
const doctorRouter = Router()

doctorRouter.get('/', getDoctorsHandler)
doctorRouter.get('/:id', getDoctorHandler)
doctorRouter.post('/', createDoctorHandler)
doctorRouter.put('/', updateDoctorHandler)

module.exports = doctorRouter;