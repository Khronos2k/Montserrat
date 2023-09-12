const express = require('express');
const productRouter = express.Router();
const productController = require('../controllers/productController');

productRouter.get('/', productController.index)
productRouter.get('/cart', productController.showProductCart)
productRouter.get('/details/:id', productController.showProductDetails)

productRouter.get('/create', productController.create)
productRouter.get('/update/:id', productController.update)

module.exports = productRouter;