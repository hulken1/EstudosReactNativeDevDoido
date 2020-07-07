'use strict';
const dotenv = require("dotenv");

dotenv.config();
const app = require('./bin/express');
const server = require('http').Server(app);

let port = process.env.PORT || 3333;

server.listen(port,()=>{
  console.log('Servidor do faustão está no ar, no seu computador, PORT: '+port);
});