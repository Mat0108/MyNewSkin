const express = require('express');
const cors = require('cors');

const hostname = "0.0.0.0";
const port = 3050;
const server = express();
const mongoose = require("mongoose");

process.env.TZ = 'Europe/Paris'
 
mongoose.connect("mongodb://mongo/podb", {
    useNewUrlParser: true,
    user: "po",
    pass: "popass"

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

