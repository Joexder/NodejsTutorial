import express from "express";
import { routerMessage } from '../components/message/network.js';

export const routes = function(server){
    server.use('/message', routerMessage);
}