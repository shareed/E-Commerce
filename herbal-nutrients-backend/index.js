const express = require('express');
const dbConnect = require('./config/dbConnect');
const app = express();
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 4000; // if port is not available will use 4000
const authRouter = require('./routes/authRoute'); //add route file
const bodyParser = require('body-parser');
const { notFound, errorHandler } = require('./middlewares/errorHandler');

dbConnect();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))


// app.use("/", (req, res) =>{
//     res.send("Hello from server")
// })

//localhost:5000/api/user/{any route in the authRouter}
app.use('/api/user', authRouter)



//the middlewares must be past after routes
app.use(notFound);
app.use(errorHandler)
//Listen for connections
app.listen(PORT, () => {
    console.log(`Server is Running at PORT localhost:${PORT}`);
})