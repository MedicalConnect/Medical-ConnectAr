const {Doctor, Paciente} = require('../db')
const { Op } = require("sequelize")


const createDoctor = async(nombre, apellido, fecha_de_nacimiento, sexo, tipo_de_documento, numero_de_documento,pais_de_origen,provincia,
    ciudad, nacionalidad, domicilio, institucion_de_titulacions, fecha_de_titulacion, especilidad,
    numero_de_matricula, telefono, email, contraseña) => {

        const existingDoc = await Doctor.findOne({
            where: {
                numero_de_documento,
                email,
                
            }
        })

        if(existingDoc) throw Error('El doctor ya existe')
        const doctor = await Doctor.create({nombre, apellido, fecha_de_nacimiento, sexo, tipo_de_documento, numero_de_documento,pais_de_origen,provincia,
            ciudad, nacionalidad, domicilio, institucion_de_titulacions, fecha_de_titulacion, especilidad,
            numero_de_matricula, telefono, email, contraseña})

        return doctor    


}

const getDoctors = async(name) =>  {
    if(!name) {
        const allDoctors = await Doctor.findAll()
        return allDoctors
    }

    const filterDoctors = await Country.findAll({
        where: { name: { [Op.iLike]: `%${name}%` } },
        })
    
    if(!filterDoctors.length) throw Error('No se encontraron resultados')

    return filterDoctors;

}

const getDoctor = async(id) => {
    const doctorFound = await Doctor.findByPk(id, {
        include: {
            model: Paciente,
            through: {
                attributes: [],
            }
        }
    })
    if(!doctorFound) throw Error('Doctor no encontrado')
    else return doctorFound

}

const updateDoctor = async(nombre, apellido, fecha_de_nacimiento, sexo, tipo_de_documento, numero_de_documento,pais_de_origen,provincia,
    ciudad, nacionalidad, domicilio, institucion_de_titulacions, fecha_de_titulacion, especilidad,
    numero_de_matricula, telefono, email, contraseña) => {

        await Doctor.update({nombre, apellido, fecha_de_nacimiento, sexo, tipo_de_documento, numero_de_documento,pais_de_origen,provincia,
            ciudad, nacionalidad, domicilio, institucion_de_titulacions, fecha_de_titulacion, especilidad,
            numero_de_matricula, telefono, email, contraseña}, 
            {
                where: {nombre: nombre,
                    apellido: apellido,
                    email: email,

            }
        })

        return 'Datos actualizados con exito'

}

const addPacienteToDoctor = async(idDoctor, idPaciente) =>{
    const doctor= await Doctor.findOne({
        where: {id: idDoctor}
    })
    if(!doctor) throw Error('Doctor no encontrado')

    doctor.addPaciente(await Paciente.findOne({ where:{id: idPaciente}}))
    return 'Paciente agregado con exito'

}

module.exports = {
    createDoctor,
    getDoctors,
    getDoctor,
    updateDoctor,
    


}