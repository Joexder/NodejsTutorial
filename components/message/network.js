import express from 'express';
import {success, error} from "../../network/responses.js";
import { addMessage } from './controller.js';

export const routerMessage = express.Router();

routerMessage.get('/', function(req, res){
    console.log(req.headers);
    success(req,res,'Message List');
});

routerMessage.post('/', function(req, res){    
    addMessage(req.body.user, req.body.message)
        .then(() =>{
            success(req,res,'Message Added',201);
        })
        .catch(e =>{
            error(req,res,"Something was wrong!!",400);
        });
});

