const express = require('express');  
const ProductController = require('./controllers/ProductController');
const UserControler = require('./controllers/UserControler');
const routes =  express.Router();

routes.post('/products', ProductController.store);
routes.get('/products', ProductController.find);

routes.post('/users', UserControler.store);
routes.get('/users', UserControler.find);
module.exports = routes;