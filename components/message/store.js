import mongoose from "mongoose";
import {Model} from "./model.js"

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://user:123user@nodestore.26zeeob.mongodb.net/test', {UseNewUrlParser:true});
console.log('[DB] connected successfully');


function appendMessage(message){
    const myMessage = new Model(message);
    myMessage.save();
}

async function getMessages(){
    const messageList = await Model.find();
    return messageList;
}

export const store = {
    add: appendMessage,
    list: getMessages,
}