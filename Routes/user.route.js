const express= require("express");
const router = express.Router();

const UserController = require("../Controllers/user.controller");



router.get('/login',(req,res)=>{
    res.send("login")
});

router.post('/register',UserController.register);

module.exports=router;