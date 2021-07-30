const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const passport = require("passport");
const console = require("console");


const app = express();

const port =3000;

app.listen(port , ()=>{
    console.log('server started port : '+port);
})