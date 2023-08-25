const express = require('express');
const productRouter = express.Router();
const productController = require('../controllers/productController');

productRouter.get('/', productController.showProductsAll)
productRouter.get('/cart', productController.showProductCart)
productRouter.get('/details', productController.showProductDetails)

module.exports = productRouter;