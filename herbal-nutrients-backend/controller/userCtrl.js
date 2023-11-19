const User = require('../models/userModel');//allow us to use the user schema
const asyncHandler = require('express-async-handler');
const {generateToken} = require('../config/jwtToken');
// req.body wiil get you all the details entered by the user
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


const loginUserCtrl = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    // console.log(email, password);

    //check if user exists
    const findUser = await User.findOne({ email });

    //if user found, then check if the entered password
    //uses the isPasswordMatched method created on the userSchema
    if (findUser && await findUser.isPasswordMatched(password)) {
        // res.json(findUser)//before adding token
        res.json({
            _id: findUser?._id,
            firstName: findUser?.firstName,
            lastName: findUser?.lastName,
            email: findUser?.email,
            mobile: findUser?.mobile,
            token: generateToken(findUser?._id),
        });
    } else {
        throw new Error('Invalid Credentials');
    }
});


module.exports={createUser, loginUserCtrl}
