const{Schema, model} = require('mongoose');
const mongoose = require('mongoose');
const AccountSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    phone:{
        type:String,
        required:false
    },
    location: {
        type: String,
        required:false
    }
},{
    timestamp: true,
});

const accountConn = mongoose.createConnection('mongodb://Hortum_admin:'+ process.env.atlas_password +'@cluster0-shard-00-00.cxg9o.mongodb.net:27017,cluster0-shard-00-01.cxg9o.mongodb.net:27017,cluster0-shard-00-02.cxg9o.mongodb.net:27017/Account?ssl=true&replicaSet=atlas-mxtxhu-shard-0&authSource=admin&retryWrites=true&w=majority', {
  useNewUrlParser: true});


module.exports = accountConn.model('Account', AccountSchema);