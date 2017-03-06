const {Schema, model}= require(mongoose);

const userSchema = new Schema({
    // lowercase sprawia ze string jest automatycznie lowercasowany
    email: {type: String, unique: true, lowercase: true},
    password: String,
});

const UserClass =  model('user', userSchema);

module.exports = UserClass;