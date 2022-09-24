import express from "express";

var app = express();

app.use('/', function(req, res){
    res.send('Hola Node');
});

app.listen(3000);
console.log('La aplicacion esta disponible en: https://localhost:3000');