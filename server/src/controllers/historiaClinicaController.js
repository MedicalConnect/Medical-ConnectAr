const {Paciente, HistoriaClinica} = require('../db')

const createHistoriaClinica = async(medicalHistory, allergies, medicines, habits, description, PacienteId) => {
    // console.log(PacientId)

    const historiaClinica = await HistoriaClinica.create({medicalHistory, allergies, medicines, habits, description, PacienteId})
    // const paciente = await Paciente.findOne({where: {id: PacientId}})
    // console.log(paciente)

    // await historiaClinica.addPaciente(paciente)
    return 'Historia clinica creada'

}

const getHistoriaClinica = async(PacienteId) => {
    const historiaClinica = await HistoriaClinica.findOne(
        {where: {PacienteId: PacienteId},
        include: [Paciente]

    })
    if(!historiaClinica) throw Error('Este paciente no tiene historia clinica')
    return historiaClinica;

}



module.exports = {
    createHistoriaClinica,
    getHistoriaClinica
}