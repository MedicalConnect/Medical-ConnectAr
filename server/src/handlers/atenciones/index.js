const { createAttentionHandler } = require("./createAtencionMedicaHandler");
const { getAtencionMedicaHandler } = require("./getAtencionMedicaHandler");
const { createVideocallHandler } = require("./createVideocallHandler");
const {
  updateOneFieldAttentionHandler,
} = require("./updateOneFieldAttentionHandler");
const { getAttentionHandler } = require("./getAttentionHandler");
const {getAttentionByIdHandler} = require("./getAttentionByIdHandler")

module.exports = {
  createAttentionHandler,
  getAtencionMedicaHandler,
  createVideocallHandler,
  updateOneFieldAttentionHandler,
  getAttentionHandler,
  getAttentionByIdHandler
};
