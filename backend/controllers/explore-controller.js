const ExploredJob = require("../models/explore-job-model");

//? Save a new explored job
const saveExploredJob = async (req, res) => {
    try {
        const newExploredJob = new ExploredJob(req.body);
        console.log(req.body);
        const savedExploredJob = await newExploredJob.save();
        res.status(201).json({ msg: "Explored job added successfully!", exploredJob: savedExploredJob });
    } catch (error) {
        res.status(400).json({ msg: "Error adding explored job." });
    }
};

//? Get all explored jobs for the logged-in user
const getAllExploredJobs = async (req, res) => {
    try {
        const userId = req.user.userId; // Extract user ID from the decoded token in the middleware

        // Fetch all explored jobs for the logged-in user
        const exploredJobs = await ExploredJob.find({ userID: userId });

        res.status(200).json({ exploredJobs });
    } catch (error) {
        console.error("Error fetching explored jobs:", error);
        res.status(500).json({ msg: "Error fetching explored jobs." });
    }
};

//? Delete an explored job by ID
const deleteExploredJob = async (req, res, next) => {
    try {
        const userId = req.user.userId; // Extract user ID from the decoded token in the cookie (authentication middleware)
        const exploredJobId = req.params.id;

        // Find the explored job and ensure it belongs to the logged-in user
        const exploredJobToDelete = await ExploredJob.findOne({ _id: exploredJobId, userID: userId });
        if (!exploredJobToDelete) {
            return res.status(404).json({ error: "Explored job not found or you are not authorized to delete this job" });
        }

        // Delete the explored job
        await ExploredJob.findByIdAndDelete(exploredJobId);

        res.json({ message: `Explored job with id: ${exploredJobId} deleted successfully!` });
    } catch (error) {
        console.error("Error deleting explored job:", error);
        res.status(500).json({ error: "Error deleting explored job" });
    }
};

module.exports = { saveExploredJob, getAllExploredJobs, deleteExploredJob };
