const express = require('express');
const morgan = require('morgan');
const mainRouter = require ('./routes/index');

require('./db');

const server = express();

server.name = '';

//NOS ENCARGAMOS QUE UN MIDDLEWARE DE EXPRESS, PASE TODA LA INFORMACION QUE LLEGA A MODO DE JSON, A OBJETO JAVASCRIPT
server.use(express.json());
server.use(morgan('dev'));

// server.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
//     res.header('Access-Control-Allow-Credentials', 'true');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
//     next();
//   });
// con la configuración adecuada de CORS puedes definir qué dominios externos tienen permitido acceder a los recursos de tu servidor y qué tipo de solicitudes se les permite realizar. Por ejemplo, puedes permitir que un dominio específico realice solicitudes GET a ciertos recursos de tu servidor, mientras que bloqueas todas las demás solicitudes.
// De esta forma, puedes controlar quién tiene acceso a tus recursos del servidor y protegerlos de posibles ataques o intentos de acceso no autorizados.

server.use(mainRouter);

// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
  });
//   se encarga de manejar los errores que puedan ocurrir en la aplicación, para que la aplicación no se bloquee y el usuario final reciba una respuesta adecuada en caso de un error.
// Si ocurre un error en alguna de las rutas o middleware anteriores, se lanza una excepción, la cual será capturada por este middleware. El middleware toma el objeto err, que contiene información sobre el error, y utiliza su status y message para enviar una respuesta de error al cliente.
// Además, este middleware también escribe el error en la consola del servidor para que puedas verlo y solucionarlo en caso de que sea necesario.

module.exports = server;
