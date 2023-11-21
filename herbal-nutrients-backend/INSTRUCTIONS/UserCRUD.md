# New user Functionality
- You will need
    - User Model/Schema
    - Controller/Create User Function
    - Route


1. Create User Schema
    - `models --> userModel.js`
    - install **Mongo Snippets for Nodejs**
        - `!mdbgum` will generate a MongoDB User Model/Schema

2. Create Authorization Route
    - `routes --> authRoute.js`
        ```
        const express = require('express');
        const router = express.Router();

        router.post("/register");
        module.exports = router;
        ```
    - add the route to the `index.js` file
        ```
        const authRouter = require('./routes/authRoute')

        app.use('api/user', authRouter)
        ```

3. Create a Create User Function
    - `controller --> userCtrl.js`
        ```
            const User = require('../models/userModel');

            const createUser = async (req, res) => {
                //check to see if user already exist
                const email = req.body.email;
                const findUser = await User.findOne({email:email}); //checks to see if the email is already in use

                if (!findUser) { //if user is not found

                    //if you do not use await here, then the user information will not be returned
                    const newUser = await User.create(req.body); //Create a new User
                    res.json(newUser);
                } else { //If user already exist
                    res.json({
                        msg: "User Already Exists",
                        success: false
                    });
                }
            };

            module.exports={createUser}
        ```
        - Promises: async/await
            - enables asynchronous, promise-based behavior to be written in a cleaner style and avoiding the need to explicitly configure promise chains
            - [Learn More](https://github.com/asoreed/JavaScript/blob/main/Notes/JavaScript/Promises.md)
        - MongoDB
            - `findOne` function
    - add the fuction to the `authRoute.js` file's post method
        ```
        const { createUser } = require('../controller/userCTrl');
        router.post("/register", createUser);
        ```


## Test Route
- You can use postman to do this
- pass the data in the body as raw json

- in index.js 
```
const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

```

## User CRUD
    - Get All Users
    - Register A New User
        - use email to check to see if user exist
        - if user does not exist create a new user
            - Encrypts password by way of hash attached to the userSchema
    - Log User In
        - verify password matches encrypted passwordby way of method attached to userSchema
        - add token to login session using jwt
    - Get a User
        - user id is passed in through `req.params` to get user
    - Update User
        - user id is passed in through `req.params` to update user
    - Delete User
        - user id is passed in through `req.params` and delets the user