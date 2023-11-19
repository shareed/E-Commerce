const jwt = require('jsonwebtoken');


//uses id to generate the token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "3d" });
};

module.exports={generateToken}