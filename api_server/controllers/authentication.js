const UserModel = require("../models/user");
const jwt = require('jwt-simple');
const {secret} = require("../config");

function generateToken(user) {
    const timestamp = new Date().getTime()
    return jwt.encode({sub: user.id, iat: timestamp}, secret);
}

module.exports = {
    signup: function (req, res, next) {
        const {email, password} = req.body;
        if (!email || !password) {
            return res.status(422).send({error: "wymagane email i haslo"})
        }
        UserModel.findOne({email}, (err, user) => {
            if (err) {
                return next(err);
            }

            if (user) {
                return res.status(422).send({error: `Mail ${email} już w użyciu`});
            }

            const newUser = new UserModel({
                email,
                password
            });

            return newUser.save((err, result) => {
                if (err) {
                    return next(err);
                }
                return res.json({token: generateToken(newUser)});
            });
        });
    }
};
