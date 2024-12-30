const express = require("express");
const job = require("../models/job-model");
const jobrouter = express.Router();

//To get all the jobs
jobrouter.get("/", async (req, res) => {
    try {
        const jobs = await job.find();
        res.json(jobs);
    } catch (error) {
        res.status(500).json({msg: "Error fetching jobs."});
    }
});


//To save a new job
jobrouter.post("/", async (req, res) => {
    try {
       const newJob = new job(req.body);
       const savedJob = await newJob.save();
       res.status(201).json({msg: "job added successfully!", job: savedJob}) 
    } catch (error) {
        res.status(400).json({msg: "Error adding jobs."});
    }
});

//Update a job
jobrouter.put("/:id", async (req, res) => {
    try {
        const updatedJob = await job.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });

        if(!updatedJob){
            return res.status(400).json({msg: "Job not found."});
        }
    } catch (error) {
        
    }
});

jobrouter.delete("/:id", async (req, res) =>{
    try {
        const deletedJob = await Job.findByIdAndDelete(req.params.id);
        if (!deletedJob) {
            return res.status(404).json({ error: "Job not found" });
        }
        res.json({ message: `Job with id: ${req.params.id} deleted successfully!` });
    } catch (error) {
        res.status(500).json({ error: "Error deleting job" });
    }
});

module.exports = jobrouter;
