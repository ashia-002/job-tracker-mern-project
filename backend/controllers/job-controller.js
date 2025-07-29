const job = require("../models/job-model");

//? Get all jobs with optional pagination
const getAllJobs = async (req, res) => {
    try {
        const userId = req.user.userId;

        const jobs = await job.find({userID: userId});
        
        res.json(jobs);
    } catch (error) {
        res.status(500).json({msg: "Error fetching jobs."});
    }
};

//? Save a new job
const saveNewJob = async (req, res) => {
    try {
       const newJob = new job(req.body);
       const savedJob = await newJob.save();
       res.status(201).json({msg: "job added successfully!", job: savedJob}) 
    } catch (error) {
        res.status(400).json({msg: "Error adding jobs."});
    }
};

const updateJob = async (req, res) => {
    try {
        // Get the user's ID from the decoded token in the middleware
        const userId = req.user.userId;

        // Find the job by ID and ensure it belongs to the logged-in user
        const jobToUpdate = await job.findOne({ _id: req.params.id, userID: userId });

        if (!jobToUpdate) {
            return res.status(404).json({ msg: "Job not found or you don't have permission to update it." });
        }

        // Update the job
        const updatedJob = await job.findByIdAndUpdate(req.params.id, req.body, {
            new: true, // Return the updated document
            runValidators: true, // Ensure validation is applied
        });

        res.status(200).json({
            msg: "Job updated successfully.",
            updatedJob,
        });
    } catch (error) {
        console.error("Error updating job:", error);
        res.status(500).json({ msg: "Error updating job." });
    }
};

//? Delete a job by ID
const deleteJob = async (req, res, next) => {
    try {
        const userId = req.user.userId; // Extract user ID from the decoded token in the cookie (authentication middleware)
        const jobId = req.params.id;

        // Find the job and ensure it belongs to the logged-in user
        const jobToDelete = await job.findOne({ _id: jobId, userID: userId });
        if (!jobToDelete) {
            return res.status(404).json({ error: "Job not found or you are not authorized to delete this job" });
        }

        // Delete the job
        await job.findByIdAndDelete(jobId);

        res.json({ message: `Job with id: ${jobId} deleted successfully!` });
    } catch (error) {
        console.error("Error deleting job:", error);
        res.status(500).json({ error: "Error deleting job" });
    }
};


module.exports = {getAllJobs, saveNewJob, updateJob, deleteJob}
