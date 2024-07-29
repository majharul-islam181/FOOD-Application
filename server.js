const express = require('express');
const colors = require('colors');
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv');
const connectDB = require('./config/db');




//dot en configuration
// dotenv.config({path:'./'}) //if .env file is not same location\
dotenv.config()


//db connection
connectDB();

//rest object
const app = express();

//middleware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

//route
app.use('/api/v1/test', require('./routes/testRoutes'))
app.use('/api/v1/auth', require('./routes/authRoutes'))
app.use('/api/v1/user', require('./routes/userRoutes'))


//route
app.get('/',(req,res)=>{
    res.status(200).send('Welcome to Food Server');
})


const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}!`.white.bgMagenta)
})