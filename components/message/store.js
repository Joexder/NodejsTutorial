const list = [];

function appendMessage(message){
    list.push(message);
}

function getMessages(){
    return list;
}

export const store = {
    add: appendMessage,
    list: getMessages,
}