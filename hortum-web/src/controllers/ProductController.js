const axios = require('axios');
const productConn = require('../models/Products');

module.exports = {
    async store(req, res){
        const {name, description, image} = req.body;
        // const productExists = await Product.findOne({ name: name});

        // if(productExists){
        //     return res.json(productExists);
        // }
        await productConn.create({
            name,
            description, 
            image
        })
        return res.json({"Produto": name, "Descrição": description, "imagem": image});
    }
}