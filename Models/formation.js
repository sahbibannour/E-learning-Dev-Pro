const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
        Name: String,
        email:String,
        discription:String,
        phone:  String,
      
   });



const Formation = module.exports = mongoose.model('formation', userSchema, 'formations');

module.exports.GetFormationById = function(id , callback){
    User.findById(id , callback);

}

module.exports.GetUserByFormationName = function(Name , callback){
   const query = {Name : Name}
   User.findOne(query , callback);
  
}

module.exports.addFormation = function (formation ,callback){
        Formation.save(callback); 
}
