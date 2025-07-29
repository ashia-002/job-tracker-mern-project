const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: true,
    },
    company: {
        type: String,
        require: true, 
    },
    role: {
        type: String,
        require: true,
    },
    category: {
        type: String,
    },
    opportunity: { 
        type: String 
    },
    location: { 
        type: String 
    },
    type: { 
        type: String 
    },
    status: { 
        type: String 
    },
    date: { 
        type: Date, 
        default: Date.now 
    },
    person: { 
        type: String 
    },
    link: { 
        type: String 
    },
});

const job = new mongoose.model("job", jobSchema);

module.exports = job;