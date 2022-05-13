const axios = require('axios');
const Account = require('../models/Account');

module.exports = {
    async store(req, res){
        const {name, email, password, phone,location} = req.body;
        await Account.create({
            name,
            email, 
            password,
            phone,
            location
        })
        return res.json({"Usuario": name, "Email": email, "password": password, "phone": phone, "location": location});
    },
    async find(req,res){
        //const {name, email, image, password} = req.body;
        Account.find((err, account) => {
            // Note that this error doesn't mean nothing was found,
            // it means the database had an error while searching, hence the 500 status
            if (err) return res.status(500).send(err)
            // send the list of all people
            return res.status(200).send(account);
        });
        
    }
}
