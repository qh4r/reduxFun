const passport = require('passport');
const User = require('../models/user');
const {secret} = require('../config');
const {Strategy, ExtractJwt} = require('passport-jwt');

const jwtOptions = {
    jwtFromRequest : ExtractJwt.fromHeader('authorization'),
    secretOrKey: secret
};

const jwtLogin = new Strategy(jwtOptions, function (payload, done) {
    User.findById(payload.sub, function(err, user) {
        if(err) {
            return done(err, false);
        }

        if(user) {
            done(null, user);
        } else {
            done(null, false);
        }
    })
});

passport.use(jwtLogin);