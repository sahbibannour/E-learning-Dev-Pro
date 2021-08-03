var User =require('../Models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');



module.exports.register = (req , res, next)=>{

let user = new User();
    user.fullName=req.body.fullName;
    user.email=req.body.email;
    user.password=req.body.password;
    user.phone=req.body.phone;
    user.birthday=req.body.birthday;
    user.role=req.body.role;
    user.admin="non";
    console.log(user);
   

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



module.exports.authenticate = (req, res, next) => {
    let user = new User();
    user.collection.findOne({
      email: req.body.email
    }, function (err, user) {
      if (err) throw err;
      if (!user) {
        res.status(401).send({ success: false, msg: 'utilisateur non trouvee.' });
      } else {
        
        console.log("else");
      }
    
    });

  }


