process.on('uncaughtException',(err)=>{
    console.log(err.name,err.message)
    console.log('UNHANDLER EXCEPTION! Shutting down....')
    process.exit(1)
})

const express = require('express');
const app = express();
require("dotenv").config()






// db connection
const dbConnection = require('./conn/dbConn');
const taskRoutes  = require('./routers/taskRouters')
const errorControllers = require('./controllers/errorController');
dbConnection();


// middleware
app.use(express.json());

app.use('/api/v1/',taskRoutes)
app.use(errorControllers)


const server = app.listen(process.env.PORT || 5000, () => {
    console.log('Server is running on port 5000');
});

process.on('unhandledRejection',(err)=>{
    console.log(err.name,err.message)
    console.log('UNHANDLER REJECTION! Shutting down....')
    
    server.close(()=>{
        process.exit(1)
    })
})

