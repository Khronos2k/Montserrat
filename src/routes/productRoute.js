const express = require('express');
const productRouter = express.Router();
const productController = require('../controllers/productController');

//  *** GET PRODUCT-LIST ***
productRouter.get('/', productController.index);
//  *** CREATE ***
productRouter.get('/create', productController.create);
productRouter.post('/', productController.store);
//  *** GET CART-LIST ***
productRouter.get('/cart', productController.showProductCart);

//  *** GET PRODUCT ***
productRouter.get('/details/:id', productController.showProductDetails);

//  *** GET EDIT FORM ***
productRouter.get('/update/:id', productController.edit);
//  *** PUT UPDATE ***
productRouter.put('/update/:id', productController.update);

//  *** DELETE ***
productRouter.delete('/delete/:id', productController.delete);


module.exports = productRouter;