const UserModel = require("../models/user");

module.exports = {
    signup: function (req, res, next) {
        const {email, password} = req.body;
        if(!email || !password) {
            return res.status(422).send({error: "wymagane email i haslo"})
        }
        UserModel.findOne({email}, (err, user) => {
            if (err) {
                return next(err);
            }

            if(user) {
                return res.status(422).send({error: `Mail ${email} już w użyciu`});
            }

            const newUser = new UserModel({
                email,
                password
            });

            return newUser.save((err, result) => {
                if(err) {
                    return next(err);
                }
                return res.json({success: true});
            });
        });
    }
}
