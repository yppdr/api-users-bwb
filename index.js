// Require express & body-parser + cree une instance express
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Déclare mon tableau d'users
var users = {
    username : "Administrateur",
    password : "ʇıq‾@W",
    connected : false
};

// Ma route de base
app.get('/', function (req, res) {
  res.send('Team YaFaJu ! <3')
})

// Ma route pour la connexion qui retourne les login
app.get('/connected', function(req, res){
    res.header('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(users);
});

//Ma route pour la verification qui : Retourne les infos de l'user si c'est bon plus un status 200 /!\ TODO : NE PLUS SEND LE PASSWORLD /!\
//                                    Retourne un message d'erreur + un status 401 si les infos sont pas bonnes
app.post('/verify', function(req, res){
    res.header('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');
    var user = req.body;
    if(user.password === users.password && user.username === users.username){
        users.connected = true;
        res.status(200).json(user);
    }else{
        res.status(401).send("erreur d'authentification");
    }
});

// Run
app.listen(3000, function () {
    console.log('instance run sur 3000')
})
