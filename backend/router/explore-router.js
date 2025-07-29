const express = require("express");
const explorerouter = express.Router();
const { saveExploredJob, deleteExploredJob, getAllExploredJobs } = require("../controllers/explore-controller");
const authentication = require("../middlewares/authentication");


explorerouter.route("/").post(authentication, saveExploredJob);
// explorerouter.route("/").post( saveExploredJob);

explorerouter.route("/").get(authentication, getAllExploredJobs);

explorerouter.route("/:id").delete(authentication, deleteExploredJob);

module.exports = explorerouter;