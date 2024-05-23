const express = require('express');
const router = express.Router();

const products = require('../models/products');

router.get('/produtos', products.buscarTodos);

module.exports = router;