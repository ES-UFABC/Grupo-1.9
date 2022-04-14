const axios = require('axios');
const productConn = require('../models/Products');
const Product = require('../models/Products');

module.exports = {
    async store(req, res){
        const {title, producer, value, image, 
            location, favorite, telephone, address} = req.body;
        // const productExists = await Product.findOne({ title: title});

        // if(productExists){
        //     return res.json(productExists);
        // }
        await productConn.create({
            title, 
            producer, 
            value, 
            image, 
            location, 
            favorite,
            telephone,
            address
        })
        return res.json({"Title":title, 
            "Producer":producer, 
            "Value":value, 
            "Image":image, 
            "Location":location, 
            "Favorite":favorite,
            "Telefone": telephone,
            "Endereço": address});
    }
}