const mongoose = require('mongoose');


let userSchema = new mongoose.Schema({
  fullName: {
    type: String
   
  },
  email: {
    type: String
  
  },
 password: {
    type: String
  
  },
  phone: {
    type: String
   
  },
  birthday: {
    type: String
   
  },
  role: {
    type: String
   
  },
  admin: {
    type: String
   
  }
 
});

module.exports = mongoose.model('USERS', userSchema);