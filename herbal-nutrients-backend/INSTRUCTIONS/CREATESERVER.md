# Create Server
1. Add package.json
    - `npm init`
2. Add Folders for 
    - `config`
        - used to create database connections
    - `controller`
        - the model will be connected to the controller
        - functionality such as create read update and delete
    - `middlewares`
        - OAuth and Error
    - `models`
        - Schemas
    - `routes`
        - Routes
    - Add `index.js` file to root
        - where the server is created
3. Install `npm install express mongoose bcrypt body-parser dotenv`
    - `express` helps manage servers and routes
    - `mongoose` Node. js-based Object Data Modeling (ODM) library for MongoDB
    - `bcrypt` use to hash and store passwords
    - `body-parser` to process data sent in an HTTP request body
        - provides four express middleware for parsing JSON, Text, URL-encoded, and raw data sets over an HTTP request body
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
    - `.env`
    - add Port `PORT=5000` to `.env` file
6. Install nodemon and Add scripts to package.json file
   
7. Start Server
    - Run `npm run server` from the root folder
    - go to `localhost:5000` in broswer to see