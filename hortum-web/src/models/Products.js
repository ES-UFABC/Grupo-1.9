const{Schema, model} = require('mongoose');
const mongoose = require('mongoose');
const productConn = mongoose.createConnection('mongodb://Hortum_admin:'+ process.env.atlas_password +'@cluster0-shard-00-00.cxg9o.mongodb.net:27017,cluster0-shard-00-01.cxg9o.mongodb.net:27017,cluster0-shard-00-02.cxg9o.mongodb.net:27017/Product?ssl=true&replicaSet=atlas-mxtxhu-shard-0&authSource=admin&retryWrites=true&w=majority', {
  useNewUrlParser: true});

const ProductSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    producer: {
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
    },
    location:{
        type: String,
        required: true
    },
    favorite:  {
        type: Number,
        required: true
    }
},{
    timestamp: true,
});

module.exports = productConn.model('Product', ProductSchema);