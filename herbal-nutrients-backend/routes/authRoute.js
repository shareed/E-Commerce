const express = require('express');
const { createUser, loginUserCtrl, getAllUsers } = require('../controller/userCtrl');//allow us to use the createUser Function
const router = express.Router();//used to create routes

//Creates a /register route that uses the createUser function from the controller
router.post("/register", createUser);

//Creates a /login route
router.post("/login", loginUserCtrl);

//Get All Users
router.get('/get-all-users', getAllUsers)
module.exports = router;