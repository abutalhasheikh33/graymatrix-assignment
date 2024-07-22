const express = require('express');
const app = express();
require("dotenv").config()






// db connection
const dbConnection = require('./conn/dbConn');
const taskRoutes  = require('./routers/taskRouters')
const errorControllers = require('./controllers/errorControllers');
dbConnection();


// middleware
app.use(express.json());

app.use('/api/v1/',taskRoutes)
app.use(errorControllers)


app.listen(process.env.PORT || 5000, () => {
    console.log('Server is running on port 5000');
});
