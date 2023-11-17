# MERN E-Commerce BackEnd

## STEP BY STEP INSTRUCTIONS
1. [Create Server](./INSTRUCTIONS/CREATESERVER.md)
2. [Connect To Database](./INSTRUCTIONS/CONNECTTODB.md)
3. [Create Functionality to Create New User](./INSTRUCTIONS/NewUserFunctionality.md)

4. Create Error Handling Middleware
    - `middlewares --> errorHandler.js`
    - `npm install express-async-handler`
        ```
            //If Not found
            const notFound = (req, res, next) => {
                const error = newError(`Not Found : ${req.originalURL}`)
                res.status(404);
                next(error);
            }

            //Error Handler

            const errorHandler = (err, req, res, next) => {
                const statusCode = res.statusCode == 200 ? 500 : res.statusCode;
                res.status(statusCode);
                res.json({
                    message: err?.message,
                    stack: err?.stack
                });
            };

            module.exports={notFound, errorHandler};
        ```

    - in `index.js` use the middlewares after all routes
        ```
            const { notFound, errorHandler } = require('./middlewares/errorHandler');
            //the middlewares must be past after routes
                app.use(notFound);
                app.use(errorHandler)
        ```

    - in `userCtrl.js` use `express-async-handler` to control the errors
    - add to the createUser function
        ```
            const asyncHandler = require('express-async-handler');

            const createUser = asyncHandler(
                async (req, res) => {
                    //check to see if user already exist
                    const email = req.body.email;
                    const findUser = await User.findOne({ email: email }); //checks to see if the email is already in use
                
                    if (!findUser) { //if user is not found
                
                        //if you do not use await here, then the user information will not be returned
                        const newUser = await User.create(req.body); //Create a new User
                        res.json(newUser);
                    } else { //If user already exist
                        throw new Error('User Already Exists')
                    }
                }
                
            );
            module.exports={createUser}
        ``` 