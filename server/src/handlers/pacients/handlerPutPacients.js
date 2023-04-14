const { putPacients } = require('../../controllers/pacients/putPacients.js')

const handlerPutPacients = async (req, res) => {
    const { nombre, apellido, fecha_de_nacimiento, sexo, tipo_de_documento, numero_de_documento, pais_de_origen, ciudad, partido, localidad, domicilio, telefono, email, contraseña } = req.body
    try {
        const response = await putPacients( nombre, apellido, fecha_de_nacimiento, sexo, tipo_de_documento, numero_de_documento, pais_de_origen, ciudad, partido, localidad, domicilio, telefono, email, contraseña )
        res.stats(200).json(response)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.export = {
    handlerPutPacients
}

