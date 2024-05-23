require('dotenv/config');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const porta = 3000;
const routes = require('../src/routes/products');

const server = express();
server.use(cors());
server.use(bodyParser.urlencoded({extended: false}));

server.use('/api/v1', routes)

server.listen(process.env.PORT, () =>{
    console.log(`Servidor iniciado: http://localhost:${process.env.PORT}`);
})