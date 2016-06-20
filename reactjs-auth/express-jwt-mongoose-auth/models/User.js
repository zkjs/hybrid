var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var schema = mongoose.Schema;


//Schema defines how the user data will be stored in MoogoDB
var  UserSchema = new schema({
	username:{
		type: String,
		unique: true,
		required: true
	},

	password: {
		type: String,
		required: true
	}
}) 

//Hash the user's password before inserting a user
UserSchema.pre('save',function(next){
	var user = this;
	if (this.ismodified('password')||this.isnew){
		bcrypt.genSalt(10,function(err,salt){//saltRound
			if(err){
				return next(err);
			}
			bcrypt.hash(user.password,salt,function(err,hash){//plaintextpassword,salt
				if(err){
					return next(err);
				}
				user.password = hash;
				next();
			});
		});
	} else {
		return next();
	}

});


//Compare password input to password saved in database
UserSchema.methods.comparePassword = function(pw, cb) {
  bcrypt.compare(pw, this.password, function(err, isMatch) {//someOtherPlaintextPassword. hash
    if (err) {
      return cb(err);
    }
    cb(null, isMatch);
  });
};

// Export the model
module.exports = mongoose.model('User', UserSchema);