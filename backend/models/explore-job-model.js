const mongoose = require("mongoose");

const exploredJobSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: true,
    },
    jobTitle: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    jobLink: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

const exploredJob = mongoose.model("ExploredJob", exploredJobSchema);

module.exports = exploredJob;
