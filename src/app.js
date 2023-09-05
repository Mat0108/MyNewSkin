const express = require('express');
const cors = require('cors');

const hostname = "0.0.0.0";
const port = 3000;
const server = express();
const mongoose = require("mongoose");
const user = process.env.USER;
const password = process.env.PASSWORD;
const db = process.env.DB;

process.env.TZ = 'Europe/Paris'
 
mongoose.connect(`mongodb://mongo/${db}`, {
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



server.listen(port, hostname);

