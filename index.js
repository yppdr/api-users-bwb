const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 


var users = {
    username : "Administrateur",
    password : "ʇıq‾@W",
    isConnected : false
};

app.get('/connected', function(req, res){
    res.header('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(users);
});

app.post('/verify', function(req, res){
    res.header('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');
    var user = req.body;
    if(user.password === users.password && user.username === users.username){
        users.isConnected = true;
        res.status(200).json(user);
    }else{
        res.status(401).send("erreur d'authentification");
    }
});

app.listen(3000, function () {
    console.log('instance run sur 3000')
})