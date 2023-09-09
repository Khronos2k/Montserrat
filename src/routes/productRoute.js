const express = require('express');
const productRouter = express.Router();
const productController = require('../controllers/productController');

productRouter.get('/', productController.index)
productRouter.get('/cart', productController.showProductCart)
productRouter.get('/:id', productController.showProductDetails)

module.exports = productRouter;