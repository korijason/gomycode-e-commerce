// server/routes/productRoutes.js
const express = require('express');
const { getProducts, addProduct } = require('../controllers/productController');
const router = express.Router();

// Route to get all products
router.get('/', getProducts);

// Route to add a new product (for testing)
router.post('/', addProduct);

module.exports = router;
