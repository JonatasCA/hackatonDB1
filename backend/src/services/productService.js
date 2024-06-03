const database = require('../../database/database');
const { buscarUm } = require('../models/products');

module.exports = {
    buscarTodos: () => {
        return new Promise((aceito, rejeitado) => {
            database.query('SELECT * FROM products', (error, results) => {
                if(error) {rejeitado(error); return;}
                aceito(results);
            });
        });
    },

    buscarUm: (id) => {
        return new Promise((aceito, rejeitado) => {

            database.query('SELECT * FROM products WHERE id = ?', [id], (error, results) => {
                if(error) { rejeitado(error); return; }
                if(results.length > 0){
                    aceito(results[0]);
                }else{
                    aceito(null);
                }
            });
        });
    }
};