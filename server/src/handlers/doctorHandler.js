const {
  createDoctor,
  getDoctor,
  getDoctors,
  updateDoctor,
  getDoctorByNDocumento,
} = require("../controllers/doctorController");

const getDoctorHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await getDoctor(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const getDoctorsHandler = async (req, res) => {
  const { numero_de_documento } = req.query;

  try {
    const response = numero_de_documento ? await getDoctorByNDocumento(numero_de_documento) : await getDoctors();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createDoctorHandler = async (req, res) => {
  const {
    nombre,
    apellido,
    fecha_de_nacimiento,
    sexo,
    tipo_de_documento,
    numero_de_documento,
    pais_de_origen,
    provincia,
    ciudad,
    nacionalidad,
    domicilio,
    titulo,
    institucion_de_titulacion,
    fecha_de_titulacion,
    especilidad,
    numero_de_matricula,
    telefono,
    email,
    contraseña,
  } = req.body;
  try {
    const response = await createDoctor(
      nombre,
      apellido,
      fecha_de_nacimiento,
      sexo,
      tipo_de_documento,
      numero_de_documento,
      pais_de_origen,
      provincia,
      ciudad,
      nacionalidad,
      domicilio,
      titulo,
      institucion_de_titulacion,
      fecha_de_titulacion,
      especilidad,
      numero_de_matricula,
      telefono,
      email,
      contraseña
    );

    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateDoctorHandler = async (req, res) => {
  const {
    nombre,
    apellido,
    fecha_de_nacimiento,
    sexo,
    tipo_de_documento,
    numero_de_documento,
    pais_de_origen,
    provincia,
    ciudad,
    nacionalidad,
    domicilio,
    titulo,
    institucion_de_titulacion,
    fecha_de_titulacion,
    especilidad,
    numero_de_matricula,
    telefono,
    email,
    contraseña,
  } = req.body;
  try {
    const response = await updateDoctor(
      nombre,
      apellido,
      fecha_de_nacimiento,
      sexo,
      tipo_de_documento,
      numero_de_documento,
      pais_de_origen,
      provincia,
      ciudad,
      nacionalidad,
      domicilio,
      titulo,
      institucion_de_titulacion,
      fecha_de_titulacion,
      especilidad,
      numero_de_matricula,
      telefono,
      email,
      contraseña
    );

    res.status(200), json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getDoctorsHandler,
  createDoctorHandler,
  getDoctorHandler,
  updateDoctorHandler,
};
