const User = require("../model/user");
console.log("secret : ", process.env.SECRET_KEY);
var passport = require("passport");
var passportJWT = require("passport-jwt");

var ExtractJwt = passportJWT.ExtractJwt;
var JwtStrategy = passportJWT.Strategy;

var jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = process.env.SECRET_KEY;

try {
  var strategy = new JwtStrategy(jwtOptions, async (jwt_payload, done) => {
    console.log("payload recieved", jwt_payload);
    var user = User.where({ id: jwt_payload.user_id });
    if (user) {
      user = await user.fetch({ columns: ["id", "email"] });
      user = user.toJSON();
      done(null, user);
    } else {
      done(null, user);
    }
  });
} catch (err) {
  console.log(err);
}

passport.use(strategy);
