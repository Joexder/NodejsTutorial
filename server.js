import express from "express";
import bodyParser from "body-parser";
import {success, error} from "./network/responses.js"


var app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(router);

router.get('/message', function(req, res){
    console.log(req.headers);
    success(req,res,'Message List');
});

router.post('/message', function(req, res){
    console.log(req.query);
    if(req.query.error == "ok"){
        error(req,res,"Something was wrong!!",404);
    }
    success(req,res,'Message Added',201);
});

app.listen(3000);
console.log('La aplicacion esta disponible en: http://localhost:3000/');