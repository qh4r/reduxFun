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

userSchema.methods.comparePassword = function(candidatePassword, cb) {
    // tutaj trza bylo zbindowac this
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
        if(err) {
            return cb(err);
        }
        if(!isMatch){
            return cb(null, false);
        }
        cb(null, this);
    })
};

const UserClass = mongoose.model('user', userSchema);

module.exports = UserClass;