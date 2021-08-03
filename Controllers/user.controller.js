const User =require('../Models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');



const register = (req , res, next)=>{

let user = new User();
    user.fullName=req.body.fullName;
    user.email=req.body.email;
    user.password=req.body.password;
    user.phone=req.body.phone;
    console.log(req.body);
   

user.save()
        .then(User =>{
        res.json({
            message:'user added'
        })
        }) .catch(error =>{
            console.log(error);
            res.json({
                message:'error you have !!'
            })
            });


}







module.exports={register}