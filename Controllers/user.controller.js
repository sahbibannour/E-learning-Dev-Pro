var User =require('../Models/user');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var config = require('../Config/config');




module.exports.register = (req , res, next)=>{

let user = new User();
var HashedPassword = bcrypt.hash(req.body.password, 10);
    user.fullName=req.body.fullName;
    user.userName=req.body.userName
    user.email=req.body.email;
    user.password=req.body.password;
    user.phone=req.body.phone;
    user.birthday=req.body.birthday;
    user.role=req.body.role;
    user.admin=false;
    console.log(user);
   
User.addUser(user,(err,user)=>{
   if(err){
        res.json({success:false , msg:"failed to register user "});
   }else
   {
    res.json({success:true , msg:" user registered "});
   }

});


}



module.exports.authenticate = (req, res, next) => {
  const userName = req.body.userName;
  const password = req.body.password;
  User.GetUserByUserName(userName,(err, user)=> {
      if (err) throw err;
      if (!user) {
        return res.json({ success: false, msg: 'utilisateur non trouvee.' });
      } 
      User.CamparePassword (password , user.password , (err ,isMatch)=>{
        if(err) throw err;
        if(isMatch){
          const token = jwt.sign({data:User},config.mysecret, {expiresIn : 604800});
         res.json({ 
           success:true,
           token : 'jwt'+token,
           user:{
           id:user.id,
           userName:user.userName,
           email:user.email,
           admin:user.admin
          }
           });





        }else{
          return res.json({ success: false, msg: 'password is wrong' });
        }


      });
    
    });

  }


  module.exports.profile = (req,res)=>{
   
     res.json(req.body);
  }



  


