const express=require('express')
const app=express()
const dotenv=require('dotenv').config()
const PORT=process.env.PORT
const authRouter=require('./routes/authroute')
const employeeRoutes =require('./routes/emproute')
const bodyParser = require('body-parser')
const cookieparser=require('cookie-parser')
const { notfound, errorhandler } = require('./middlewares/errorhandlermi')
require('./config/dbconnect2').connect()
const  morgan=require('morgan')
const cors=require('cors')

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cookieparser())
app.use(cors())
app.use('/api/user',authRouter)
app.use('/api/employees',employeeRoutes)


app.use(notfound)
app.use(errorhandler)










app.listen(PORT, ()=>console.log(`server  is running at ${PORT}`))