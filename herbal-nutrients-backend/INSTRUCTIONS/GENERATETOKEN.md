# Generate Token
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

2. Add functionality to create token when a user logs in
    - the if function of the `loginUserCtrl` function in the `userCtrl.js` file needs to be updated to generate token on login
        ```
            if (findUser && await findUser.isPasswordMatched(password)) {
                // res.json(findUser)//before adding token
                res.json({
                    _id: findUser?._id,
                    firstName: findUser?.firstName,
                    lastName: findUser?.lastName,
                    email: findUser?.email,
                    mobile: findUser?.mobile,
                    token: generateToken(findUser?._id),
                });
            } else........
        ```
3. Give the userSchema a role
    ```
            role: {
            type: String,
            default:"user"
        },
    ```