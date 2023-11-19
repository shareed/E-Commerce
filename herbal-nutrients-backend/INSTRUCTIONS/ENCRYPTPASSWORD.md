# Encrypt Passowrd
**When a user creates an account we do not need to save the password as plain text instead we need to encrypt the password using bcrypt and then save it**
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
- In the `userModel.js` create a method to compare the hashed password with the entered password
    - add below the hash function
    ```
        //to check and see if passwords match when a user login
        //userSchema.methods.isPasswordMatched, creates a method called isPasswordMatched
        userSchema.methods.isPasswordMatched = async function (enteredPassword) {
            //if password is correct will return true otherwise will return false
            return await bcrypt.compare(enteredPassword, this.password); 
        }
    ```
3. **Create a function to Control Login:** 
- In order to compare the passwords you need to used the method `isPasswordMatched` that was created
- In the `userCtrl.js` create the function that controls the login
    ```
        const loginUserCtrl = asyncHandler(async (req, res) => {
        const { email, password } = req.body;
            // console.log(email, password);

            //check if user exists
            const findUser = await User.findOne({ email });

            //if user found, then check if the entered password
            //uses the isPasswordMatched method created on the userSchema
            if (findUser && await findUser.isPasswordMatched(password)) {
                res.json(findUser)
            } else {
                throw new Error('Invalid Credentials');
            }
        });
    ```

- add the route to the `authRoute.js` file
    - `router.post("/login", loginUserCtrl);`