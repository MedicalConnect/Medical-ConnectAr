const { createVideocallController } = require("./createVideocallController");
const { createAttentionController } = require("./createAttentionController");
const {
  updateOneFieldAttentionController,
} = require("./updateOneFieldAttentionController");
const { getAttentionController } = require("./getAttentionController");

module.exports = {
  createVideocallController,
  createAttentionController,
  updateOneFieldAttentionController,
  getAttentionController,
};
