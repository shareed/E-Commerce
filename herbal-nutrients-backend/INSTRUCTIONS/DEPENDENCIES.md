# Dependencies
- [`express`]() helps manage servers and routes
- [`mongoose`]() Node. js-based Object Data Modeling (ODM) library for MongoDB
- [`bcrypt`]() use to hash and store passwords
- [`body-parser`]() to process data sent in an HTTP request body
    - provides four express middleware for parsing JSON, Text, URL-encoded, and raw data sets over an HTTP request body
- [`dotenv`]() keep passwords, API keys, and other sensitive data out of your code
    - allow you to create environment variables in a .env file instead of putting them into your code
    - environment variables can be accessed by using `process.env.nameOfVarable`
- [`npm install express-async-handler`]()
    - middleware for handling exceptions inside of async express routes and passing them to your express error handlers
- [`npm install jsonwebtoken`](https://jwt.io/introduction) defines a compact and self-contained way for securely transmitting information between parties as a JSON object
    - information can be verified and trusted because it is digitally signed
    - can be signed using a secret(HMAC algorithm)
    - can be signed using a public/private key pair using RSA or ECDSA
    - can be encrypted to also provide secrecy between parties

# Dev Dependencies
- [`nodemon`]() 
    - `npm install nodemon --save-dev`, installs as dev dependency
        - monitors your project directory and automatically restarts your node application when it detects any changes, so you do not have to stop and restart your applications in order for your changes to take effect
    - **Scripts:** are used fgor the server to be able to start
        - `"start": "node index.js",`
        - `"server": "nodemon index.js"`