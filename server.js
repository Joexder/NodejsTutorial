import express from "express";

var app = express();
const router = express.Router();

app.use(router);

router.get('/message', function(req, res){
    res.send('Message List');
});

router.post('/message', (req, res) => res.send('Message Add'));

app.listen(3000);
console.log('La aplicacion esta disponible en: http://localhost:3000/');