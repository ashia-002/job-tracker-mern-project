const express = require('express');
const router = require("../backend/router/auth-router");
const app = express()
const PORT = 3000

app.use("/api/auth", router);

app.get("/", (req, res) => {
    res.send("hello world");
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})