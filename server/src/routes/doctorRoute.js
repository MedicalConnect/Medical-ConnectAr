const {Router} = require('express');
const { createDoctorHandler, getDoctorsHandler, getDoctorHandler, updateDoctorHandler } = require('../handlers/doctorHandler');
const { validateDoctor } = require('../middlewares/validateDoctor');
const doctorRouter = Router()

doctorRouter.get('/', getDoctorsHandler)
doctorRouter.get('/:id', getDoctorHandler)
doctorRouter.post('/',validateDoctor, createDoctorHandler)
doctorRouter.put('/',validateDoctor, updateDoctorHandler)

module.exports = doctorRouter;