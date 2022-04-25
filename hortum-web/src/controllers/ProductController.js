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
    },
    find(req,res){
        //const {name, email, image, password} = req.body;
        Product.find((err, product) => {
            // Note that this error doesn't mean nothing was found,
            // it means the database had an error while searching, hence the 500 status
            if (err) return res.status(500).send(err)
            // send the list of all people
            return res.status(200).send(product);
        });
        
    }
}