const User = require('../models/userModel');//allow us to use the user schema
const asyncHandler = require('express-async-handler');


//function to create user
const createUser = asyncHandler(
    async (req, res) => {
        //check to see if user already exist
        const email = req.body.email;
        const findUser = await User.findOne({ email: email }); //checks to see if the email is already in use
    
        if (!findUser) { //if user is not found
    
            //if you do not use await here, then the user information will not be returned
            const newUser = await User.create(req.body); //Create a new User
            res.json(newUser);
        } else { //If user already exist
            throw new Error('User Already Exists')
        }
    }
    
);


const loginUserCtrl = asyncHandler(async(req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
})


module.exports={createUser}
