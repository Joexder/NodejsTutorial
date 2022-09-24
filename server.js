import express from "express";
import bodyParser from "body-parser";

var app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(router);

router.get('/message', function(req, res){
    res.send('Message List');
});

router.post('/message', function(req, res){
    console.log(req.query);
    res.send('Message Add');
});

app.listen(3000);
console.log('La aplicacion esta disponible en: http://localhost:3000/');