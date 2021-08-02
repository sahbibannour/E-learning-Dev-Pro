const User =require('../Models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = mongoose.model('users');

const register = (req , res, next)=>{
let user = new User({
    fullName:req.body.fullName,
    email:req.body.email,
    password:req.body.password,
    phone:req.body.phone,
   
});



User.save()
        .then(User =>{
        res.json({
            message:'user added'
        })
        }) .catch(error =>{
            res.json({
                message:'error yu have !!'
            })
            });


}

module.exports={register}