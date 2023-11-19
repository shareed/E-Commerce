# Encrypt Passowrd

1. **Encrypt Password:** When a user creates an account we should not save the password in plain text
- In the `userModel.js` file use bcrypt to hash password
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

2. **Compare encrypted password and the password used to login:** When the user logs in you have to be able to compare the saved hashed password with the entered password
- In the `userModel.js` create a function to compare the hashed password with the entered password
    - add below the hash function
    ```
        //to check and see if passwords match when a user login
        userSchema.methods.isPasswordMatched = async function (enteredPassword) {
            //if password is correct will return true otherwise will return false
            return await bcrypt.compare(enteredPassword, this.password); 
        }
    ```
3. In order to compare the password used to login and the