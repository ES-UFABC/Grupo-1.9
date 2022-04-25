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
    },
    async find(req,res){
        //const {name, email, image, password} = req.body;
        User.find((err, user) => {
            // Note that this error doesn't mean nothing was found,
            // it means the database had an error while searching, hence the 500 status
            if (err) return res.status(500).send(err)
            // send the list of all people
            return res.status(200).send(user);
        });
        
    }
}
