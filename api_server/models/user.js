const mongoose = require('mongoose');
const bcrypt = require("bcrypt-nodejs");

const userSchema = new mongoose.Schema({
    // lowercase sprawia ze string jest automatycznie lowercasowany
    email: {type: String, unique: true, lowercase: true},
    password: String,
});

userSchema.pre('save', function (next) {
    const user = this;

    bcrypt.genSalt(10, function (err, salt) {
        if (err) {
            return next(err);
        }

        bcrypt.hash(user.password, salt, null, function (err, hash) {
            if (err) {
                return next(err);
            }

            user.password = hash;
            next();
        })
    })
});

const UserClass = mongoose.model('user', userSchema);

module.exports = UserClass;