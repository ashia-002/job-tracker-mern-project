const express = require("express");
const jobrouter = express.Router();
const {getAllJobs, saveNewJob, updateJob, deleteJob} = require("../controllers/job-controller");
const jobSchema = require("../validators/job-validation");
const validateJob = require("../middlewares/jobValidate-middleware");
const authentication = require("../middlewares/authentication");

//To get all the jobs
jobrouter.route("/").get(authentication, getAllJobs);
 

//To save a new job
// jobrouter.route("/").post(authentication, validateJob(jobSchema), saveNewJob);
jobrouter.route("/").post( authentication, saveNewJob);

//Update a job
// jobrouter.route("/:id").put(authentication, validateJob(jobSchema), updateJob);
jobrouter.route("/:id").put( authentication, updateJob);

// jobrouter.route("/:id").get(getJob);

//Delete a job
jobrouter.route("/:id").delete(authentication, deleteJob);

module.exports = jobrouter;
