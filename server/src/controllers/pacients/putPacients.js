const { Paciente } = require("../../db.js");

const putPacients = async (nombre, apellido, tipo_de_documento, numero_de_documento, fecha_de_nacimiento, sexo,  pais_de_origen, provincia, ciudad, nacionalidad, domicilio, telefono, email, contraseña) => {
    if(
        !nombre ||
        !apellido ||
        !tipo_de_documento ||
        !numero_de_documento ||
        !fecha_de_nacimiento ||
        !sexo ||
        !pais_de_origen ||
        !provincia ||
        !ciudad ||
        !nacionalidad ||
        !domicilio ||
        !telefono ||
        !email ||
        !contraseña
      )
        throw new Error("Falta informacion requerida");

    await Paciente.update({
        nombre : nombre,
        apellido : apellido,
        tipo_de_documento : tipo_de_documento,
        fecha_de_nacimiento : fecha_de_nacimiento,
        sexo : sexo,
        pais_de_origen : pais_de_origen,
        provincia : provincia,
        ciudad : ciudad,
        nacionalidad : nacionalidad,
        domicilio : domicilio,
        telefono : telefono,
        email : email,
        contraseña : contraseña,
    }, {
        where: {
            numero_de_documento : numero_de_documento
        }
    });
 return ('Datos actualizados con exito')
}


module.exports = {
  putPacients,
};
