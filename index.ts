import Server from './clases/server';
import { SERVER_PORT } from './global/environment';
import mongoose from 'mongoose'
import cors from 'cors'
import bodyParser from 'body-parser';
import {nombre_BD} from './global/environment';

const server = new Server () ;

///////BodyParser

server.app.use(bodyParser.urlencoded({ extended:true }) );
server.app.use(bodyParser.json () );

///////cors

server.app.use ( cors ({ origin:true, credentials:true}) );

/////IMPORTAR RUTAS ///////

import usuarioRoutes from './rutas/usuario';

////RUTAS////

server.app.use('/usuario', usuarioRoutes);

////// CONEXION A BASE DE DATOS //////

mongoose.connect( 'mongodb://localhost:Nematronix',{ useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true},(err) =>{
    if (err) throw err;
    console.log(`conectado a mi base de datos ${ nombre_BD }`);
});

////// ARRANQUE DEL SERVIDOR ///////

server.start( () => {

    console.log(`Servidor corriendo en ${ SERVER_PORT }`);

});

