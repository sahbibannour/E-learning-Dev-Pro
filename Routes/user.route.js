const express= require("express");
const router = express.Router();

const UserController = require("../Controllers/user.controller");



router.get('/login',UserController.authenticate);

router.post('/register',UserController.register);

module.exports=router;