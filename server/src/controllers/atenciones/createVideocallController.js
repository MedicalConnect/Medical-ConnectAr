require("dotenv").config();
const axios = require("axios");
const { API_KEY_VIDEOCALL, API_URL_VIDEOCALL } = process.env;
const { Atenciones } = require("../../db");

const createVideocallController = async (atencionId) => {
  try {
    const atencion = await Atenciones.findOne({ where: { id: atencionId } });
    if (!atencion) {
      throw new Error("No existe la atencion");
    }
    if (atencion.videocall_is_active) {
      throw new Error("Ya esta activa la videoconsulta");
    }
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${API_KEY_VIDEOCALL}`,
      },
      url: API_URL_VIDEOCALL,
      data: {
        name: atencionId.slice(0, 10),
      },
    };
    const response = await axios(options);
    if (response.status >= 400) {
      throw new Error("error al inicializar la videoconsulta");
    }
    await Atenciones.update(
      { videocall_url: response.data.url, videocall_is_active: true },
      { where: { id: atencionId } }
    );
    return response.data.url;
  } catch (error) {
    return error;
  }
};

module.exports = {
  createVideocallController,
};
