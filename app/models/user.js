var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

//======== schema user
var userSchema = mongoose.Schema({
 local : {
  email   : String,
  password: String
 }
});

//======== metode user

//hash password
userSchema.methods.hashPassword = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

//check password
userSchema.methods.checkPassword = function(password) {
  return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', userSchema);
