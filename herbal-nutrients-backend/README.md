# MERN E-Commerce BackEnd

## STEP BY STEP INSTRUCTIONS
1. [Create Server](./INSTRUCTIONS/CREATESERVER.md)
2. [Connect To Database](./INSTRUCTIONS/CONNECTTODB.md)
3. [Create Functionality to Create New User](./INSTRUCTIONS/NewUserFunctionality.md)
4. [Create Error Handling Middleware](./INSTRUCTIONS/ERRORHANDLINGMIDDLEWARE.md)
5. Encrypt Passowrd

1. In the `userModel.js` file use bcrypt to hash password
    - add below user schema
    ```
        const bcrypt = require('bcrypt');
        
        
        //To hash a password add below user schema
        //generate a salt and hash on separate function calls
        userSchema.pre('save', async function (next) {
            const salt = await bcrypt.genSaltSync(10);
            this.password = await bcrypt.hash(this.password, salt);
        })
    ```