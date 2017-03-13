const passport = require('passport');
const User = require('../models/user');
const {secret} = require('../config');
const {Strategy, ExtractJwt} = require('passport-jwt');
const LocalStrategy = require('passport-local');

const localLogin = new LocalStrategy({usernameField: 'email'}, function (email, pass, done) {
    User.findOne({
        email: email
    }, function (err, user) {
        if (err) {
            return done(err);
        }
        if (!user) {
            return done(null, false);
        }
        console.log('found', user);
        user.comparePassword(pass, done);
    })
});

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: secret
};

const jwtLogin = new Strategy(jwtOptions, function (payload, done) {

    // zwraca to co encode w authentication?
    console.log('auth', payload)
    User.findById(payload.sub, function (err, user) {
        if (err) {
            return done(err, false);
        }

        if (user) {
            done(null, user);
        } else {
            done(null, false);
        }
    })
});

passport.use(jwtLogin);
passport.use(localLogin);