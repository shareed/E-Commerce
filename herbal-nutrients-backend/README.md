# MERN E-Commerce BackEnd

- [List of Dependencies](./INSTRUCTIONS/DEPENDENCIES.md)

## STEP BY STEP INSTRUCTIONS
1. [Create Server](./INSTRUCTIONS/CREATESERVER.md)
2. [Connect To Database](./INSTRUCTIONS/CONNECTTODB.md)
3. [Create Functionality to Create New User](./INSTRUCTIONS/NewUserFunctionality.md)
4. [Create Error Handling Middleware](./INSTRUCTIONS/ERRORHANDLINGMIDDLEWARE.md)
5. [Encrypt Password](./INSTRUCTIONS/ENCRYPTPASSWORD.md)



## Generate tokens
1. Create a function to generate the token
- Create a `jwtToken.js` file inside the config folder
- add function to generate token
- you will need to create a secret key in the .env file
    ```
        const jwt = require('jsonwebtoken');
        //uses id to generate the token
        const generateToken = (id) => {
            return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "3d" });
        };

        module.exports={generateToken}
    ```