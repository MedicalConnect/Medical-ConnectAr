const  {Admin} = require("../../db")

const getAllAdminsController = () => {
    return Admin.findAll();
  };

module.exports = getAllAdminsController