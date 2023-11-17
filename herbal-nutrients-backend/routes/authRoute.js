const express = require('express');
const { createUser } = require('../controller/userCTrl');
const router = express.Router();

router.post("/register", createUser);


module.exports = router;