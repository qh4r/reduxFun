const UserModel = require("../models/user");

module.exports = {
    signup: function(req, res, next) {
        const {email, password } = req.body;
        UserModel.findOne({email}, (err, user) => {

        });

        res.send({
            success: true,
            body: req.body
        });
    }
}
