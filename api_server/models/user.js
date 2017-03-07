const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    // lowercase sprawia ze string jest automatycznie lowercasowany
    email: {type: String, unique: true, lowercase: true},
    password: String,
});

const UserClass =  mongoose.model('user', userSchema);

module.exports = UserClass;