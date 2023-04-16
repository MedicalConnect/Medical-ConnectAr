const { Paciente, connection } = require("../db");

const putAtencionMedica = async (
  examen_fisico,
  diagnostico,
  indicaciones_domiciliarias,
  medicamentos,
  examenes,
  certificados
) => {
  function random(max) {
    return Math.floor(Math.random() * max);
  }
  let arr =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".match(
      /[a-zA-Z0-9]/g
    );

  let pass = "";
  for (let i = 0; i < 9; i++) {
    pass += arr[random(arr.length - 1)];
  }
  data = await Paciente.findOne({ where: { numero_de_documento: "36429041" } });
  let id = data.id;
  let indic = "{" + indicaciones_domiciliarias.map((e) => e) + "}";
  console.log(id);
  connection
    .query(
      `UPDATE "Atenciones" SET "examen_fisico" = :newExamen_fisico, "indicaciones_domiciliarias" = :newIndicaciones_domiciliarias WHERE "PacienteId" = :AtencionesId`,
      {
        replacements: {
          newExamen_fisico: examen_fisico,
          newDiagnostico: diagnostico,
          newIndicaciones_domiciliarias: indic,
          newMedicamentos: medicamentos,
          newExamenes: examenes,
          newCertificados: certificados,
          AtencionesId: id,
        },
      }
    )
    .then(([results, metadata]) => {
      console.log(results);
    });
  return `Datos modificados correctamente su contraseña es ${pass}`;
};

const getAtencionMedica = async (PacienteId) => {
  const getAtencionMedica = await getAtencionMedica.findOne({
    where: { PacienteId: PacienteId },
    include: [Paciente],
  });
  if (!getAtencionMedica) throw Error("404 Not found");
  return "Video";
};

module.exports = {
  putAtencionMedica,
  getAtencionMedica,
};
