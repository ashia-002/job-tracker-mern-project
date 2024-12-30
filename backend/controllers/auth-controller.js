//controller for login page
const login = async (req, res) =>{
    try {
        res.send("login route");
    } catch (error) {
        console.log(error);
        
    }
};

//controller for registration page
const registration = async (req, res) =>{
    try {
        res.send("registration route");
    } catch (error) {
        console.log(error);
        
    }
};

//controller for logout page
const logout = async (req, res) =>{
    try {
        res.send("logout route");
    } catch (error) {
        console.log(error);
        
    }
};

module.exports = {login, registration, logout};

