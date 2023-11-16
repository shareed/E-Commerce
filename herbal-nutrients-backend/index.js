const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
// if port is not available will use 4000
const PORT = process.env.PORT || 4000;


app.listen(PORT, () => {
    console.log(`Server is Running at PORT ${PORT}`);
})