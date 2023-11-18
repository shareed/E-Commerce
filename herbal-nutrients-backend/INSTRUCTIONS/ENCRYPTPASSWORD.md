# Encrypt Passowrd

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

2. When the user logs inyou have to be able to match the hashed password