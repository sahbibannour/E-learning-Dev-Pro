const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const passport = require("passport");
const console = require("console");

const auth = require("./Routes/user.route");


const app = express();

const port =3000;

app.use(cors());

app.use(bodyParser.json());

app.use('/auth',auth);

app.get('',(req,res)=>{
    res.send("EndPoint");
})

app.listen(port , ()=>{
    console.log('server started port : '+port);
})