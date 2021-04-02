const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    dob:{
        type:Date
    },
    creates_at:{
        type:Date,
        default:Date.now
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;