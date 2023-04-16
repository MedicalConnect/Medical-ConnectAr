const validateDoctor = (req, res, next) => {
    const {nombre, apellido, fecha_de_nacimiento, sexo, tipo_de_documento, numero_de_documento,pais_de_origen,provincia,
        ciudad, partido, localidad, domicilio, institucion_de_titulacions, fecha_de_titulacion, especilidad,
        numero_de_matricula, telefono, email, contraseña} = req.body
        
        const regExpEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        const regExpContraseña = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

        if(!nombre) return res.status(400).send('Se necesita un nombre')
        if(!apellido) return res.status(400).send('Se necesita al menos un apellido')
        if(!fecha_de_nacimiento) return res.status(400).send('Falta la fecha de nacimiento')
        if(!sexo) return res.status(400).send('Especifique sexo')
        if(!tipo_de_documento) return res.status(400).send('Falta el tipo de documento')
        if(!numero_de_documento) return res.status(400).send('Falta el número de documento')
        if(!pais_de_origen) return res.status(400).send('Especifique su pais de origen')
        if(!provincia) return res.status(400).send('Especifique su provincia')
        if(!ciudad) return res.status(400).send('Especifique su ciudad de residencia')
        if(!partido) return res.status(400).send('Especifique su partido')
        if(!localidad) return res.status(400).send('Especifique su localidad')
        if(!domicilio) return res.status(400).send('Se necesita una direccion de residencia')
        if(!institucion_de_titulacions) return res.status(400).send('Especifique su institucion de titulacion')
        if(!fecha_de_titulacion) return res.status(400).send('Especifique su institucion de titulacion')
        if(!especilidad) return res.status(400).send('Especifique su especialidad')
        if(!numero_de_matricula) return res.status(400).send('Se necesita un numero de matricula')
        if(!telefono) return res.status(400).send('Se necesita un telefono de contacto')
        if(!email) return res.status(400).send('Se necesita una direccion de correo electronico')
        if(!contraseña) return res.status(400).send('Debe ingresar una contraseña')

        if(!(regExpEmail.test(email))) return res.status(400).json({error: 'Direccion de correo electronico invalida'})
        if(!(regExpContraseña.test(contraseña))) return res.status(400).json({error: 'La contraseña no cumple con los requisitos'})
        if(numero_de_documento.length < 8 ) return res.status(400).json({error: 'El numero de documento debe tener al menos 8 digitos'})

        next()
       
}
module.exports = {
    validateDoctor
}