/**
 * Created by qinyejun on 6/18/16.
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const userSchema = new Schema({
  email: {type: String, unique: true},
  password: String
});


userSchema.pre('save', function(next){
  const user = this;

  bcrypt.genSalt(10, function (err,salt) {
    if (err) { return next(err); }

    bcrypt.hash(user.password, salt, null, function(err, hash){
      if (err) { return next(err); }

      user.password = hash;
      next();

    });
  });
});

userSchema.methods.comparePassword = function(pwd, callback) {
  bcrypt.compare(pwd, this.password, function (err, isMatch) {
    if (err) { return callback(err); }

    callback(null, isMatch);
  })
}

const ModelClass = mongoose.model('user', userSchema);

module.exports = ModelClass;