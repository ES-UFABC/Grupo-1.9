const{Schema, model} = require('mongoose');
const mongoose = require('mongoose');

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true
    },
},{
    timestamp: true,
});

module.exports =  model('User', UserSchema);