const express=require('express')
const connectDatabase=require('./db/Database')
const { connect } = require('mongoose')
const ErrorHandler = require('./utils/ErrorHandler')
const cookieParser=require('cookie-parser');
const bodyParser=require('body-parser')
const cors=require('cors')

app.use(express.json());
app.use(cookieParser());
app.use("/",express.static("uploads"))
app.use(bodyParser.urlencoded({extended:true,limit:'50mb'}));
//config
if(process.env.NODE_ENV !=="PRODUCTION"){
    require('dotenv').config({
        path:'backend/config/.env'
    })
}
const user=require('./controller/user')
app.use("/api/v2/user",user)
connectDatabase();

connectDatabase();
app.use(ErrorHandler);
module.exports=app;