const express= require("express");
const router = express.Router();


const UserController = require("../Controllers/upload.controller");




router.post('/pdf',UserController.authenticate);



module.exports=router;