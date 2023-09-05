const express = require('express');
const cors = require('cors');

//SWAGGER (Documentation)
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const hostname = "0.0.0.0";
const port = 3000;
const server = express();
const mongoose = require("mongoose");
const user = process.env.USER;
const password = process.env.PASSWORD;

process.env.TZ = 'Europe/Paris'
 
mongoose.connect("mongodb://mongo/mdsdp", {
    useNewUrlParser: true,
    user: `${user}`,
    pass: `${password}`
}).then(() => {
    console.log('Connexion à la base de données avec succès');
}).catch(err => {
    
    console.log('Erreur de connexion à la base de données');
    process.exit();
});

server.use(express.urlencoded());
server.use(cors());
server.use(express.json());

const { application } = require('express');

server.listen(port, hostname);

