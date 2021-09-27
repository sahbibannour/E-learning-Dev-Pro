const mongoose = require('mongoose');

let formationSchema = new mongoose.Schema({
        Name: String,
        email:String,
        discription:String,
        phone:  String,
      
   });



const Formation = module.exports = mongoose.model('formation', formationSchema, 'formations');

module.exports.GetFormationById = function(id , callback){
    Formation.findById(id , callback);

}

module.exports.GetUserByFormationName = function(Name , callback){
   const query = {Name : Name}
  Formation.findOne(query , callback);
  
}

module.exports.addFormation = function (formation ,callback){
        Formation.save(callback); 
}
