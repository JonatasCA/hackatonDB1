const path = require('path');
const dotenv = require('dotenv').config;
const {sequelize} = require('../database/sequelize');

const isProduction = process.env.NODE_ENV === 'production';

if (!isProduction) {
    dotenv({
      path: path.resolve(__dirname, '../.env'),
    });
}

const http = require('http');

const app = require('../index');

sequelize.authenticate()
.then(() => {
    console.warn('Conectado com sucesso ao banco e dados!');
    return sequelize.sync({ alter: true });
  })
  .catch((error) => {
    console.warn('Erro ao conectar ao banco e dados:', error);
  });
