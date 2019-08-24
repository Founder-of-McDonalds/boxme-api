const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {
    type: String
  },
  password: {
    type: String
  },
  email: {
    type: String
  },
  phone: {
    type: String,
  },
  icon: {
    type: String
  },
});

module.exports = mongoose.model('User', UserSchema);