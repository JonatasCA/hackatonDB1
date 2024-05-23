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
    }
}