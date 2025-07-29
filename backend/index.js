const express = require('express');
require("dotenv").config();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const router = require("../backend/router/auth-router");
const jobrouter = require("../backend/router/job-router");
const explorerouter = require("../backend/router/explore-router");
const connectDb = require("../backend/utils/db");
const app = express();

const PORT = 3000

// // CORS configuration
// app.use(cors({
//     origin: "http://localhost:5173", // Allow requests from your frontend
//     credentials: true, // Allow cookies and headers
// }));

// CORS configuration - allowing multiple origins
const allowedOrigins = [
    "http://localhost:5173", // Development frontend
    "https://www.google.com", // Production frontend URL
];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true); // Allow the request
        } else {
            callback(new Error('Not allowed by CORS')); // Reject the request
        }
    },
    credentials: true, // Allow cookies and headers
}));


app.use(cookieParser());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/jobs", jobrouter);
app.use("/api/explore", explorerouter);

app.get("/", (req, res) => {
    res.send("hello world");
})

connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`listening on port ${PORT}`);
    });
});

