import express from "express";
import bodyParser from "body-parser";
import {routes} from "./network/routers.js";


var app = express();

app.use(bodyParser.json());
routes(app);

app.use('/app', express.static('public'));

app.listen(3000);
console.log('La aplicacion esta disponible en: http://localhost:3000/');