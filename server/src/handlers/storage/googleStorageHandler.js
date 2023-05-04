const { Storage } = require("@google-cloud/storage");
const multer = require("multer");
const fs = require("fs");
const upload = multer({ dest: "uploads/" });
require("dotenv").config();
const { storage } = require("../../googleCloudStorage");

const googleStorageHandler = async (req, res) => {
  try {
    const { pacienteId } = req.params;
    console.log(req.params);
    // Obtiene el archivo cargado desde la solicitud
    const file = req.file;
    console.log(req.file, "primer log, req paso por aca");
    const buffer = file.buffer;
    const bucketName = "medicalconnect-storage";
    const destFileName = `${pacienteId}/image.jpg`;
    await storage.bucket(bucketName).file(destFileName).save(buffer);
    return res.status(200).send("se cargo la imagen correctamente");
  } catch (err) {
    console.error(`Error al manejar la solicitud de carga de archivos: ${err}`);
    res
      .status(500)
      .send(`Error al manejar la solicitud de carga de archivos: ${err}`);
  }
};

module.exports = { googleStorageHandler };
