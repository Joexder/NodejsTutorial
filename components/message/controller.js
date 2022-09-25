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
    
        console.log(message);
        return resolve(message);
    });
}