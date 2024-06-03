const { json } = require('body-parser');
const productService = require('../services/productService');

module.exports = {
    buscarTodos: async (req, res) => {
        let json = { result: [] };

        try {
            let products = await productService.buscarTodos();

            for (let i in products) {
                json.result.push({
                    id: products[i].id,
                    name: products[i].name,
                    description: products[i].description,
                    price: products[i].price,
                    image: products[i].image
                });
            }
        } catch (error) {
            json.error = error.message;
        }

        res.json(json);
    },

    buscarUm: async(req, res) => {
        let json = { error: '', result:{} };

        let id = req.params.id;
        try {
            let product = await productService.buscarUm(id);
            if (product) {
                json.result = product;
            } else {
                json.error = 'Produto não encontrado';
            }
        } catch (error) {
            json.error = error.message;
        }

        res.json(json);
    }
}