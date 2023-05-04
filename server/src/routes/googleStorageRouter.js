const { Router } = require("express");
const multer = require("multer");
const {
  googleStorageHandler,
} = require("../handlers/storage/googleStorageHandler");
// const upload = multer({ dest: "uploads/" });
const upload = multer({ storage: multer.memoryStorage() });

const googleStorageRouter = Router();

googleStorageRouter.post("/", upload.single("image"), googleStorageHandler);

module.exports = googleStorageRouter;
