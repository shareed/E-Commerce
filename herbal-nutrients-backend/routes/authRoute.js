const express = require('express');
const { createUser } = require('../controller/userCtrl');//allow us to use the createUser Function
const router = express.Router();//used to create routes

//Creates a /register route that uses the createUser function from the controller
router.post("/register", createUser);


module.exports = router;