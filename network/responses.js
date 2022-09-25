export const success = function(req, res, message,status = 200){
    res.status(status).send({
        error:'',
        body: message,
    });
}

export const error = function(req, res, message, status = 500, log){
    res.status(status).send({
        error: message,
        body: '', 
    });
}