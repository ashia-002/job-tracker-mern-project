const mongoose = require("mongoose");
const bcrypt = require("bcryptjs"); //to hash our pass word
const jwt = require("jsonwebtoken"); //for out webtoken in client side

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    phone: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
});

//?securing password
userSchema.pre('save', async function(){
    // console.log("pre method: ", this);
    const user = this;

    //if password is not modified
    if(!user.isModified("password")){
        next();
    }

    try {
       //hash the password
        const salt = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(user.password, salt);
        user.password = hash_password; 
    } catch (error) {
        next(error);
    }
})

//Compare the password for user login
userSchema.methods.comparePassword = async function(password){
    return bcrypt.compare(password, this.password);
}

//?JSON web TOKEN
/**Are not typically not stored in the database along wwith other user details. 
 * Instead, they are issued by the
 * server during the authencation process and then stored on the
 * client side (e.g., in cookies or local storage) for later use
*/
userSchema.methods.generateToken = async function () {
    try {
        return jwt.sign({
            userId: this._id.toString(),
            email: this.email,
        },
        process.env.JWT_SECRET_KEY,
        {
            expiresIn: "30d",
        }
    ) 
    } catch (error) {
        console.error(error);
    }
}

//defining the modelor collection name
const User = new mongoose.model("User", userSchema);
module.exports = User;