const jwt = require("jsonwebtoken");

const authentication = (req, res, next) => {
    // Access the token from the cookie (not from the Authorization header)
    const token = req.cookies.token;  // this is where the token will be stored

    if (!token) {
        return res.status(401).json({ msg: "No token provided, authorization denied." });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY); // Decoding the token using the secret key
        req.user = decoded; // Attaching the user data to the request object
        next(); // Pass control to the next middleware or route handler
    } catch (err) {
        return res.status(401).json({ msg: "Token is not valid." });
    }
};

module.exports = authentication;
