const express= require("express");
const router = express.Router();

const UserController = require("../Controllers/user.controller");



router.post('/login',UserController.authenticate);

router.post('/register',UserController.register);

router.get('/profile',UserController.profile);

module.exports=router;