const mongoose = require('mongoose'); // Erase if already required
const bcrypt = require('bcrypt');

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    mobile:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    role: {
        type: String,
        default:"user"
    },
});

//To hash a password:
//generate a salt and hash password on separate function calls
userSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSaltSync(10);
    this.password = await bcrypt.hash(this.password, salt);
});

//to check and see if passwords match when a user login
//this is how you create methods and attached them t the userSchema
//these methods can then be accessed in other files that use the userSchema
//userSchema.methods.isPasswordMatched, creates a method called isPasswordMatched
userSchema.methods.isPasswordMatched = async function (enteredPassword) {
    //if password is correct will return true otherwise will return false
    return await bcrypt.compare(enteredPassword, this.password); 
}

//Export the model
module.exports = mongoose.model('User', userSchema);