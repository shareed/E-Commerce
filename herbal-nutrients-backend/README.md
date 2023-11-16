# MERN E-Commerce
## BackEnd
### Create Server
1. Add package.json
    - `npm init`
2. Add Folders for 
    - `config`
        - used to create database connections
    - `controller`
        - the model will be connected to the controller
        - functionality such as create read update and delete
    - `middlewares`
        - for OAuth and Error
    - `models`
        - schemas
    - `routes`
        - post and get routes
    - Add `index.js` file to root
        - where the server is created
3. Install `npm install express mongoose bcrypt body-parser dotenv`
    - `express`, helps manage servers and routes
    - `mongoose`
    - `bcrypt`
    - `body-parser`
    - `dotenv` keep passwords, API keys, and other sensitive data out of your code
        - allow you to create environment variables in a .env file instead of putting them into your code
4. Create Server
    - In `index.js`
    - need `express` and `dotenv` for this
    ```
        const express = require('express');
        const app = express();
        const dotenv = require('dotenv').config();
        // if port is not available will use 4000
        const PORT = process.env.PORT || 4000;

        app.use("/", (req, res) =>{
        res.send("Hello from server")
        })
        app.listen(PORT, () => {
            console.log(`Server is Running at PORT ${PORT}`);
        })
    ```
5. Create `.env` file in root to add PORT
    - `routes ---> .env`
    - add Port `PORT=5000` to `.env` file
6. Install nodemon and Add scripts to package.json file
    - `npm install nodemon --save-dev`, installs as dev dependency
        - monitors your project directory and automatically restarts your node application when it detects any changes, so you do not have to stop and restart your applications in order for your changes to take effect
    - **Scripts:** are used fgor the server to be able to start
        - `"start": "node index.js",`
        - `"server": "nodemon index.js"`
7. Start Server
    - Run `npm run server` from the root folder
    - go to `localhost:5000` in broswer to see

### Connect Database(Mongo DB)

1. In the `config` folder create `dbConnect.js` file
- add the folowing code to get connection started
- create a environment variable in the .env file to hold your connection string and pass the environment variable to the dbConnect file connect function `process.env.VARIABLE_NAME`
```
const {default: mongoose} = require('mongoose');

const dbConnect = () => {
    try {
        const conn = mongoose.connect(process.env.MONGODB_URL);
        console.log("Database Connected Successfully");
    } catch(error) {
            console.log("Database Error");
    }

};

module.exports = dbConnect;
```

2. In the index.js file invoke the connection
-`dbConnect()`
3. Run Server `npm run server`
    - you should see **Database Connected Successfully** in the console

