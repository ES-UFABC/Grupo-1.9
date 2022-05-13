const express = require('express');  
const AccountController = require('./controllers/AccountController');
const ProductController = require('./controllers/ProductController');
const UserControler = require('./controllers/UserControler');
const routes =  express.Router();

routes.post('/products', ProductController.store);
routes.get('/products', ProductController.find);

routes.post('/users', UserControler.store);
routes.get('/users', UserControler.find);

routes.post('/account', AccountController.store);
routes.get('/account', AccountController.find);
module.exports = routes;