const { Paciente } = require('../../db.js');
const { getAllPacients } = require('./getAllPacients')

const createPacients = async ( nombre, apellido, fecha_de_nacimiento, sexo, tipo_de_documento, numero_de_documento, pais_de_origen, ciudad, partido, localidad, domicilio, telefono, email, contraseña ) => {
    const allPacients = await getAllPacients()



    if(!nombre || !apellido || !fecha_de_nacimiento || !sexo ||!tipo_de_documento || !numero_de_documento || !pais_de_origen || !ciudad || !partido || !localidad || !domicilio || !telefono || !email || !contraseña ) throw new Error('Falta informacion requerida')

    const validate = allPacients.filter((e) => e.email === email)
    if(validate.length) throw new Error ('Ya existe un usuario con ese email')
    if(!validate.length) {

        const newPacient = await Paciente.create({
            nombre: nombre,
            apellido: apellido,
            fecha_de_nacimiento: fecha_de_nacimiento, 
            sexo: sexo,
            tipo_de_documento: tipo_de_documento,
            numero_de_documento: numero_de_documento,
            pais_de_origen: pais_de_origen,
            ciudad: ciudad,
            partido: partido,
            localidad: localidad,
            domicilio: domicilio,
            telefono: telefono,
            email: email,
            contraseña: contraseña
        })

      return ('Paciente creado correctamente')
    }
}

module.exports = {
    createPacients
}