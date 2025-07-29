const express = require("express");
const router = express.Router();
const {login, register, logout} = require("../controllers/auth-controller");
const validate = require("../middlewares/userValidate-middleware");
const userSchema = require("../validators/auth-validation");


router.route("/login").post(login);
router.route("/register").post(validate(userSchema), register);
router.route("/logout").post(logout);

module.exports = router;