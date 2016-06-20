var express = require('express');
var router = express.Router();
var passport = require('passport');
var jwt = require('jsonwebtoken');
var User = require('../models/User');
var config = require('../config');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//register a new user
router.post('/register',function(req,res){
	if(!req.body.username||!req.body.password){
		res.json({
			success:false,
			message:'please enter username and password.'
		});
	}else{
		var newUser = new User({
			username: req.body.username,
            password: req.body.password
		});

	//save the user to MongoDB
	newUser.save(function(err){
		if (err){
			return res.json({
				success:false,
				message:'The username already exists'
			})
		}

		res.json({
			success: true,
			message: 'Successfully created new user.'
		});
	});

	}

});


// Authenticate the user and get a JSON Web Token to include in the header of future requests.
router.post('/auth', function(req, res){
  User.findOne({
    username: req.body.username
  }, function(err, user) {
    if (err) throw err;

    if (!user) {
      res.send({
        success: false,
        message: 'Authentication failed. User not found.'
      });
    } else {
      // Check if password matches
      user.comparePassword(req.body.password, function(err, isMatch) {
        if (isMatch && !err) {
          // Create token if the password matched and no error was thrown
          //sign return the JTW as a string
          var token = jwt.sign(user, config.auth.secret, {
            expiresIn: "2 days"//option:algotithm,expresIn,notBefore,audience,issuer,jwtid,subjext,subject,notTimestamp,header
          });
          res.json({
            success: true,
            message: 'Authentication successfull',
            token
          });
        } else {
          res.send({
            success: false,
            message: 'Authentication failed. Passwords did not match.'
          });
        }
      });
    }
  });
});





module.exports = router;
