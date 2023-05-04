const { Storage } = require("@google-cloud/storage");
const multer = require("multer");
const { fs } = require("fs");
require("dotenv").config();

// Crea una instancia del cliente de Google Cloud Storage
const storage = new Storage({
  projectId: "steel-spark-384407",
  keyFilename: "googleStorage.Config.json",
});
const bucket = storage.bucket("medicalconnect-storage");

// // Nombre que deseas asignarle a la imagen en el bucket
// const destinationFileName = "image.jpg";

// const upload = multer({ storage: multer.memoryStorage() });

// // Crea un stream de lectura para la imagen
// const fileStream = fs.createReadStream(filePath);

// // Crea un stream de escritura para el bucket
// const bucketStream = storage
//   .bucket(bucketName)
//   .file(destinationFileName)
//   .createWriteStream();

// // Carga la imagen en el bucket
// fileStream
//   .pipe(bucketStream)
//   .on("error", function (err) {
//     console.error(`Error al subir la imagen: ${err}`);
//   })
//   .on("finish", function () {
//     console.log("Imagen subida exitosamente.");
//   });

module.exports = { storage };
