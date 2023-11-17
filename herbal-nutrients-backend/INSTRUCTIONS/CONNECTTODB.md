# Connect Database(Mongo DB)
1. In the `config` folder create `dbConnect.js` file
- add the folowing code to get connection started
- create a environment variable in the .env file to hold your connection string and pass the environment variable to the dbConnect file connect function `process.env.VARIABLE_NAME`
    - you will need to create Database in MongoDB, but do not need to create a document
    - add the name of your database to the end of the connection string in the .env file
    - [How to get your connection string](https://github.com/MERN-STACK2023/MongoDB/blob/main/MongoDBCompass.md)
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

