// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


require('dotenv').config();
const express = require ('express');
const routes = require ('./routes');
const server =  express();
const mongoose = require('mongoose');

// const userConn = mongoose.createConnection('mongodb://Hortum_admin:'+ process.env.atlas_password +'@cluster0-shard-00-00.cxg9o.mongodb.net:27017,cluster0-shard-00-01.cxg9o.mongodb.net:27017,cluster0-shard-00-02.cxg9o.mongodb.net:27017/Users?ssl=true&replicaSet=atlas-mxtxhu-shard-0&authSource=admin&retryWrites=true&w=majority', {
//   useNewUrlParser: true});

//   const productConn = mongoose.createConnection('mongodb://Hortum_admin:'+ process.env.atlas_password +'@cluster0-shard-00-00.cxg9o.mongodb.net:27017,cluster0-shard-00-01.cxg9o.mongodb.net:27017,cluster0-shard-00-02.cxg9o.mongodb.net:27017/Products?ssl=true&replicaSet=atlas-mxtxhu-shard-0&authSource=admin&retryWrites=true&w=majority', {
//   useNewUrlParser: true
// });

mongoose.connect('mongodb://Hortum_temp:'+ process.env.atlas_password +'@cluster0-shard-00-00.cxg9o.mongodb.net:27017,cluster0-shard-00-01.cxg9o.mongodb.net:27017,cluster0-shard-00-02.cxg9o.mongodb.net:27017/Users?ssl=true&replicaSet=atlas-mxtxhu-shard-0&authSource=admin&retryWrites=true&w=majority', {
  useNewUrlParser: true
});
server.use(express.json());
server.use(routes);
server.listen(3333);