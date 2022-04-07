const{Schema, model} = require('mongoose');

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
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

module.exports = model('Product', ProductSchema);