const database = require('../../database/database');
// const { buscarTodos } = require('../models/products');

module.exports = {
    buscarTodos: () => {
        return new Promise((aceito, rejeitado) => {
            database.query('SELECT * FROM products', (error, results) => {
                if(error) {rejeitado(error); return;}
                aceito(results);
            });
        });
    }
};