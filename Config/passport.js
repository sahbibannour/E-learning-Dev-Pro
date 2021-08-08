const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../Models/user');
const config = require('../Config/config');

module.exports = function(passport){

  let opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
  opts.secretOrKey = config.mysecret;
 
  passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
       console.log(done);
    User.GetUserById(jwt_payload.data._id, (err, user) => {
        
      if(err){
        return done(err, false);
      }

      if(user){
        return done(null, user);
      } else {
        return done(null, false);
      }
    });
  }));
}