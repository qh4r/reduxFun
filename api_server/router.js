const authenticationController = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', {session: false});
const requireSignin = passport.authenticate('local', {session: false});

module.exports = function (app) {
    app.post('/signup', authenticationController.signup);
    app.post('/signin', requireSignin, authenticationController.signin);

    app.get('/', requireAuth,function (req, res) {
        // send jest parsowane jako html
        res.json({
            secret: "ale tajemnica he he he"
        });
        // res.send({test: "asd"}); // json zostanie sptynie rozpoznany ale mozna zrobic tylko 1 send
        //zawartowc end nie jest parsowana
        // res.end();
    })
};