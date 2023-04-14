const { Paciente } = require('../../db.js')

const putPacients = async (nombre, apellido, fecha_de_nacimiento, sexo, tipo_de_documento, numero_de_documento, pais_de_origen, ciudad, partido, localidad, domicilio, telefono, email, contraseña) => {
    const result = await Paciente.findOne({
        where: {
            nombre: nombre
        }
    })
    

    if(result.length) {
        result.nombre = nombre;
        result.apellido = apellido;
        result.fecha_de_nacimiento = fecha_de_nacimiento;
        result.sexo = sexo;
        result.tipo_de_documento = tipo_de_documento;
        result.numero_de_documento = numero_de_documento;
        result.pais_de_origen = pais_de_origen;
        result.ciudad = ciudad;
        result.partido = partido;
        result.localidad = localidad;
        result.domicilio = domicilio;
        result.telefono = telefono;
        result.email = email;
        result.contraseña = contraseña;
    }
    return ('Datos modificados correctamente')
}

module.exports = {
    putPacients
}