const { putPacients } = require("../../controllers/pacients/putPacients.js");

const handlerPutPacients = async (req, res) => {
  const {
    nombre,
    apellido,
    tipo_de_documento,
    numero_de_documento,
    fecha_de_nacimiento,
    sexo,
    pais_de_origen,
    provincia,
    ciudad,
    nacionalidad,
    domicilio,
    telefono,
    email,
    contraseña,
  } = req.body;
  try {
    const response = await putPacients(
      nombre,
      apellido,
      tipo_de_documento,
      numero_de_documento,
      fecha_de_nacimiento,
      sexo,
      pais_de_origen,
      provincia,
      ciudad,
      nacionalidad,
      domicilio,
      telefono,
      email,
      contraseña
    );
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = {
  handlerPutPacients,
};
