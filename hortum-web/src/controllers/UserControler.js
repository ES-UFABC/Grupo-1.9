const axios = require('axios');
const User = require('../models/Users');

module.exports = {
    async store(req, res){
        const {name, email, image, password} = req.body;
        // const userExists = await User.findOne({ name: name});

        // if(userExists){
        //     return res.json(userExists);
        // }
        await User.create({
            name,
            email, 
            image,
            password
        })
        return res.json({"Usuario": name, "Email": email, "password": image});
    }
}

