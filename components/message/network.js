import express from 'express';
import {success, error} from "../../network/responses.js";

export const routerMessage = express.Router();

routerMessage.get('/', function(req, res){
    console.log(req.headers);
    success(req,res,'Message List');
});

routerMessage.post('/', function(req, res){
    console.log(req.query);
    if(req.query.error == "ok"){
        error(req,res,"Something was wrong!!",404);
    }
    success(req,res,'Message Added',201);
});

