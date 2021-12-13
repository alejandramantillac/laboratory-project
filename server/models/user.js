const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = Schema({
    fullname: String,
    email: {
        type: String,
        unique: true,
    },
    password: String,
    role: String,
    active: Boolean,
    avatar: String
});

module.exports = mongoose.model('User', UserSchema);