const express = require('express');
const app = express();
require("dotenv").config()


app.get('/', (req, res) => {
    res.send('Hello World');
});


// middleware
app.use(express.json());


// db connection
const dbConnection = require('./conn/dbConn');
dbConnection();



app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running on port 3000');
});
