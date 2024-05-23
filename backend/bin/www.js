const path = require('path');
const dotenv = require('dotenv').config;
const {sequelize} = require('../database/sequelize');

const isProduction = process.env.NODE_ENV === 'production';

if (!isProduction) {
    /**
     * Carrega as variáveis de ambiente do arquivo "dev.env".
     * Porém o carregamento é feito apenas quando o projeto está rodando
     * localmente em modo de desenvolvimento.
     */
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
