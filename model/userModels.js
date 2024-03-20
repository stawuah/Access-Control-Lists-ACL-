const mongoose = require('mongoose');


const UserRole = ["admin", "user"];
const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        match: [
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'please add an email'
        ],
    },
    password: {
        type: String,
        required: true
    },
    Role: {
        type: String,
        enum: UserRole,
        required: true
    }
});

module.exports = mongoose.model('User', UserSchema);