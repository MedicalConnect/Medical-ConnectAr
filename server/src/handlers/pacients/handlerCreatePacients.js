const { createPacients } = require('../../controllers/pacients/createPacients')

const handlerCreatePacients = async (req, res) => {
    const { nombre, apellido, fecha_de_nacimiento, sexo, tipo_de_documento, numero_de_documento, pais_de_origen, ciudad, partido, localidad, domicilio, telefono, email, contraseña } = req.body

    try {
        const response = await createPacients(nombre, apellido, fecha_de_nacimiento, sexo, tipo_de_documento, numero_de_documento, pais_de_origen, ciudad, partido, localidad, domicilio, telefono, email, contraseña)
        return res.status(200).json(response)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    handlerCreatePacients
}