const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const passport = require("passport");

const db = require("./Config/database")
const auth = require("./Routes/user.route");



const app = express();

const port =process.env.PORT;




app.use(cors());

app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());

app.use('/auth',auth);

app.get('',(req,res)=>{
    res.send("EndPoint");
})

app.listen(port , ()=>{
    console.log('server started port : '+port);
})