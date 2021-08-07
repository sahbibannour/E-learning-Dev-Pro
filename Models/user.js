const mongoose = require('mongoose');

var bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');

let userSchema = new mongoose.Schema({
        fullName: String,
        email:String,
        userName:String,
        password:  String,
        phone:  String,
        birthday: String,
        role:  String,
        admin: String
   });



const User = module.exports = mongoose.model('user', userSchema, 'users');

module.exports.GetUserById = function(id , callback){
    User.findById(id , callback);

}

module.exports.GetUserByUserName = function(userName , callback){
   const query = {userName : userName}
   User.findOne(query , callback);
  
}

module.exports.addUser = function (user ,callback){
  bcrypt.genSalt(10, (err, salt) => {
    
    bcrypt.hash(user.password, salt, (err, hash) => {
        if(err) throw err;
        user.password = hash;
        user.save(callback);
       
    });
});


  
}

module.exports.CamparePassword = function(condidatPassword , hash , callback){
  bcrypt.compare(condidatPassword , hash, function(err, res) {
    console.log(condidatPassword );
    console.log(hash);
    if(err) throw err;
    callback(null,res);
});
  
}
