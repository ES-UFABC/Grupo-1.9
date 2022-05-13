const{Schema, model} = require('mongoose');
const mongoose = require('mongoose');
const ProductSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    value:{
        type: Number,
        required: true
    },
    image:{
        type: String,
        required: true
    }
},{
    timestamp: true,
});

const userConn = mongoose.createConnection('mongodb://Hortum_admin:'+ process.env.atlas_password +'@cluster0-shard-00-00.cxg9o.mongodb.net:27017,cluster0-shard-00-01.cxg9o.mongodb.net:27017,cluster0-shard-00-02.cxg9o.mongodb.net:27017/Users?ssl=true&replicaSet=atlas-mxtxhu-shard-0&authSource=admin&retryWrites=true&w=majority', {
  useNewUrlParser: true});

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },phone:{
        type:String,
        required:false
    },
    email: {
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    items: [ProductSchema],
    location:{
        type: String,
        required: false
    }
},{
    timestamp: true,
});

module.exports = userConn.model('User', UserSchema);