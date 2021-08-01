const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const passport = require("passport");
const mongoose = require("mongoose");
const db = require("./Config/database")
const auth = require("./Routes/user.route");
require('dotenv').config();



const MONGO_HOSTNAME = process.env.MONGO_HOSTNAME;
const MONGO_PORT = process.env.MONGO_PORT;
const MONGO_DB = process.env.MONGO_DB;
const DB_URL = `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`
db.connect(DB_URL);





const app = express();

const port =process.env.PORT;

app.use(cors());

app.use(bodyParser.json());

app.use('/auth',auth);

app.get('',(req,res)=>{
    res.send("EndPoint");
})

app.listen(port , ()=>{
    console.log('server started port : '+port);
})