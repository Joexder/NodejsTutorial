import express from 'express';
import {success, error} from "../../network/responses.js";
import { addMessage, getMessages } from './controller.js';

export const routerMessage = express.Router();

routerMessage.get('/', function(req, res){
    getMessages()
        .then((messages) => {
            success(req, res, messages, 202);
        })
        .catch(e => {
            error(req,res,'Unexpected Error', 501, e);
        });
});

routerMessage.post('/', function(req, res){    
    addMessage(req.body.user, req.body.message)
        .then((message) =>{
            success(req, res, message, 201);
        })
        .catch(e =>{
            error(req,res,"Something was wrong!!",400, e);
        });
});

