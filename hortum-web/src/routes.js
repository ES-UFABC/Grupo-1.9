const express = require('express');  
const ProductController = require('./controllers/ProductController');
const UserControler = require('./controllers/UserControler');
const routes =  express.Router();

routes.post('/products', ProductController.store);
  module.exports = routes;

routes.post('/users', UserControler.store);
module.exports = routes;