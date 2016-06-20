var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;
var User = require('../models/User');
var config = require('../config/');

// Setup work and export for the JWT passport strategy
module.exports = function(passport) {
  var opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeader(),//function thst accepts a request as the only parameter and return
    //the either JWT as a string or null
    secretOrKey: config.auth.secret//string or buffer containing the secret(symmetric) or PEM-encoded pubulic
    //key (asymmetric) for verifying the token's signature
  };//option :how the token is extracted from the request or verified

  passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({
      id: jwt_payload.id
    }, function(err, user){
      if (err) {
        return done(err, false);
      }
      if (user) {
        done(null, user);
      } else {
        done(null, false);
      }
    });
  }));
};
