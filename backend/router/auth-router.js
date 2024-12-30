const express = require("express");
const router = express.Router();
const {login, registration, logout} = require("../controllers/auth-controller");


router.route("/login").post(login);
router.route("/register").post(registration);
router.route("/logout").post(logout);

module.exports = router;