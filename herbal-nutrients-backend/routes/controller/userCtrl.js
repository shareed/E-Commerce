const User = require('../../models/userModel');//allow us to use the user schema
const asyncHandler = require('express-async-handler');
const {generateToken} = require('../../config/jwtToken');



// req.body wiil get you all the details entered by the user
//these functions will act a middleware and will be passed to appropiate routes in authRoute.js

//Create user/Register
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


//Login User
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
            firstName: findUser?.firstName, //? is optional chaining and it checks to see if it exist
            lastName: findUser?.lastName,
            email: findUser?.email,
            mobile: findUser?.mobile,
            token: generateToken(findUser?._id),
        });
    } else {
        throw new Error('Invalid Credentials');
    }
});


//Get All Users
const getAllUsers = asyncHandler(async (req, res) => {
    try {
        const getUsers = await User.find();
        res.json(getUsers);
    }
    catch (error) {
        throw new Error(error) 
    }
})

//Update User
const updateUser = asyncHandler(async (req, res) => {
    const { id } = req.params;

    try {
        const updatedUser = await User.findByIdAndUpdate(
            id,
            {
            firstName: req?.body?.firstName,
            lastName: req?.body?.lastName,
            email: req?.body?.email,
            mobile: req?.body?.mobile
            },
            {
                new: true,
            }
        );
        res.json(updatedUser)
    } catch (error) {
        throw new Error(error)
    }
})

//Get A single User
const getAUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    // console.log(id);
    try {
        const getUser = await User.findById(id);
        res.json({
            getUser
        })
    }
    catch (error) {
        throw new Error(error);
    }
});

//Delete single User
const deleteUser = asyncHandler(async (req, res) => {
    const { id } = req.params; //gets the id from params
    // console.log(id);
    try {
        const deleteUser = await User.findByIdAndDelete(id);
        res.json({
            deleteUser
        })
    }
    catch (error) {
        throw new Error(error);
    }
});




module.exports =
{
    createUser,
    loginUserCtrl,
    getAllUsers,
    getAUser,
    deleteUser,
    updateUser
}
