const {createDoctor, getDoctor, getDoctors} = require('../controllers/doctorController')



const getDoctorHandler = async(req,res) => {
    const {id} = req.params
    try {
        const response = await getDoctor(id)
        res.status(200).json(response)
        
    } catch (error) {
        res.status(400).json({error: error.message})
        
    }
}
const getDoctorsHandler = async(req, res) => {
    const {name} = req.query
    
    try {
        const response = await getDoctors(name)
        res.status(200).json(response)

    } catch (error) {
        res.status(400).json({error:error.message})
        
    }

}

const createDoctorHandler = async(req, res) => {
    const {nombre, apellido, fecha_de_nacimiento, sexo, tipo_de_documento, numero_de_documento,pais_de_origen, provincia,
         ciudad, partido, localidad, domicilio, institucion_de_titulacions, fecha_de_titulacion, especilidad,
         numero_de_matricula, telefono, email, contraseña} = req.body
    try {
        const response = await createDoctor(nombre, apellido, fecha_de_nacimiento, sexo, tipo_de_documento, numero_de_documento,pais_de_origen, provincia,
            ciudad, partido, localidad, domicilio, institucion_de_titulacions, fecha_de_titulacion, especilidad,
            numero_de_matricula, telefono, email, contraseña)

            res.status(200).json(response)
        
    } catch (error) {
        res.status(400).json({error: error.message})
        
    }

}

module.exports = {
    getDoctorsHandler,
    createDoctorHandler,
    getDoctorHandler
}