const { Router } = require("express");
const getAllAdminsHandler = require("../handlers/admin/getAllAdminsHandler");
const loginAdminHandler = require("../handlers/admin/loginAdminHandler");
const createAdminHandler = require("../handlers/admin/createAdminHandler");

const adminRouter = Router();

adminRouter.get("/", getAllAdminsHandler);
adminRouter.post("/", createAdminHandler);

adminRouter.post("/login", loginAdminHandler);


module.exports= adminRouter