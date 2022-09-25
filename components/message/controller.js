import { store} from "./store.js";

export function addMessage(user, text){
    return new Promise((resolve, reject) =>{
        if(!user){
            console.error('[consoleError] No existe usuario' )
            return reject('Some information are wrong');
        }

        const message = {
            user,
            text,
            date: new Date()
        }
    
        store.add(message);
        return resolve(message);
    });
}

export function getMessages(){
    return new Promise((resolve, reject) => {
        resolve(store.list());
    });
}