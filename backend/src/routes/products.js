const express = require('express');
const router = express.Router();

const products = require('../models/products');

router.get('/produtos', products.buscarTodos);
router.get('/produtos/:id', products.buscarUm);

module.exports = router;