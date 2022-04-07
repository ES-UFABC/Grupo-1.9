const axios = require('axios');
const User = require('../models/Users');

module.exports = {
    async store(req, res){
        const {name, email, image} = req.body;
        // const userExists = await User.findOne({ name: name});

        // if(userExists){
        //     return res.json(userExists);
        // }
        await User.create({
            name,
            email, 
            image
        })
        return res.json({"Usuario": name, "Email": email, "imagem": image});
    }
}

