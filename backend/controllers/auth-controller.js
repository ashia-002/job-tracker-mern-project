const User = require("../models/user-model");
const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");


const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const userExist = await User.findOne({ email });

        if (!userExist) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const user = await userExist.comparePassword(password);

        if (user) {
            // Generate token
            const token = await userExist.generateToken();

            // Set the token in a cookie with dynamic `secure` based on the environment
            res.cookie("token", token, {
                httpOnly: false,  // Ensures the cookie is not accessible via JavaScript
                secure: process.env.NODE_ENV === "production",  // Use `secure: true` in production (HTTPS)
                sameSite: "Strict",  // Ensures the cookie is only sent in requests from the same origin
            });

            return res.status(200).json({
                msg: "Login successful",
                userId: userExist._id.toString(),
                token: token,
            });
        } else {
            return res.status(401).json({ message: "Invalid email and password." });
        }

    } catch (error) {
        console.error("Error in login controller:", error);
        return res.status(500).send("An error occurred");
    }
};


// Controller for the login route
const register = async (req, res) => {
    try {
        // res.status(200).json({message: "Now lets begin your registration."});
        //console.log(req.body);
        const {username, email, phone, password} = req.body;

        const userExist = await User.findOne({email});
        if(userExist){
            return res.status(400).json({msg: "email already exists."})
        }

        // //hash the password
        // const salt = 10;
        // const hash_password = await bcrypt.hash(password, salt);


        const userCreated = await User.create({username, email, phone, password});

        res.status(201).json({
            msg: "Registration sucessfull.", 
            token: await userCreated.generateToken(), 
            userId: userCreated._id.toString()
        });

    } catch (error) {
        console.error("Error in login controller:", error);
        res.status(500).send("An error occurred");
    }
};

//controller for logout page
const logout = (req, res) => {
    // Get the token from the cookies
    const token = req.cookies.token;

    // Clear the token cookie
    res.clearCookie("token", {
        httpOnly: true, // Make sure it matches the cookie properties used in login
        secure: process.env.NODE_ENV === "production", // Set to true in production for HTTPS
        sameSite: "Strict", // To prevent CSRF attacks
    });

    //Respond with user information
        res.status(200).json({
            msg: "Logout successful",
        });
};

module.exports = { login, register, logout };




