const { Paciente, Atenciones, Doctor } = require("../../db");

const updateOneFieldAttentionController = async ({
  field,
  data,
  atencionId,
}) => {
  const atencion = await Atenciones.findOne({ where: { id: atencionId } });
  if (!atencion) {
    throw new Error("No existe la atencion");
  }
  const updateAttention = Atenciones.update(
    { [field]: data },
    { where: { id: atencionId } }
  );
  if (updateAttention) {
    return "atencion actualizada";
  }
  throw new Error("No se pudo actualizar la atencion");
};

module.exports = {
  updateOneFieldAttentionController,
};
