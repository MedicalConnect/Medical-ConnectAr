const { createVideocallController } = require("./createVideocallController");
const { createAttentionController } = require("./createAttentionController");
const {
  updateOneFieldAttentionController,
} = require("./updateOneFieldAttentionController");
const { getAttentionController } = require("./getAttentionController");
const {getAttentionByIdController}= require("./getAttentionByIdController")
module.exports = {
  createVideocallController,
  createAttentionController,
  updateOneFieldAttentionController,
  getAttentionController,
  getAttentionByIdController
};
