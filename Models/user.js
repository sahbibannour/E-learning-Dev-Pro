const mongoose = require('mongoose');

const Schema = mongoose.Schema

let user = new Schema({
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
 password: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  }
 
})

const User =mongoose.model('User',  Schema);

module.exports = User;