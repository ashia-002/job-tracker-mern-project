const mongoose = require("mongoose");
const URI = process.env.MONGODB_URL;

const connectDb = async() => {
    try {
        await mongoose.connect(URI);
    } catch (e) {
        console.error("database connection error.")
        process.exit(0);
    }
};

module.exports = connectDb;