//Import packages nécessaires
const express = require('express');
const bodyParser = require('body-parser');
//const mysql = require('mysql');

//const userRoutes = require('./routes/user.js');

//création application Express
const app = express();


//Résolution erreur CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

//Parser les corps des requête
app.use(bodyParser.json());

//Middleware
//app.use('/api/users', userRoutes);

module.exports = app;