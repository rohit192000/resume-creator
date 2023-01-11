const passport = require('passport');
const localStrategy = require('passport-local');
const User = require('../model/user');

const login = passport.use(
    'login',
    new localStrategy(
        {
            usernameField : 'email',
            passwordField : 'password'
        },
        async (email, password, done) => {
            try {
                const user = await User.where({email : email});

                if(!user){
                    return done(null, false, { message : "User Not Found"});
                }

                const validate = await user.where({password : password});

                if(!validate){
                    return done(null. false, { message : 'Wrong Password' });
                }

                return done(null, user, { message : 'Logged in successfully' });
            }catch(error){
                done(error);
            }
        }
    )
)

module.export = login;