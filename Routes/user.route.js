const express= require("express");
const router = express.Router();

var passport = require('passport');
require('../Config/passport')(passport)

const UserController = require("../Controllers/user.controller");




router.post('/login',UserController.authenticate);

router.post('/register',UserController.register);

router.get('/profile',passport.authenticate('jwt',{session: false}),UserController.profile);

module.exports=router;