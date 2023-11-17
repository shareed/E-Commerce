const {default: mongoose} = require('mongoose');

const dbConnect = () => {
    try {
        const conn = mongoose.connect(process.env.MONGODB_URL);//allow us to connect to the mongodb database
        console.log("Database Connected Successfully");
    } catch(error) {
            console.log("Database Error");
    }

};

module.exports = dbConnect;