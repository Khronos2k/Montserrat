const express = require('express');
const productRouter = express.Router();
const path = require('path');
//  **** Multer ****
const multer = require('multer');
//  **** Controllers ****
const productController = require('../controllers/productController');

//  **** Multer Configuration ****
const storage = multer.diskStorage({
    destination: (req, file, cd) => {
        cd(null, './public/images/products');
    },
    filename: (req, file, cd) => {
        const nameFile = `products_${Date.now()}${path.extname(file.originalname)}`;
        cd(null, nameFile);
    }
});
const uploadFile = multer({storage});

//  ****    GET:PRODUCT-LIST    ****
productRouter.get('/', productController.index);
//  ****    GET:PRODUCT-CART    ****
productRouter.get('/cart', productController.showProductCart);
//  ****    GET:PRODUCT-DETAIL    ****
productRouter.get('/details/:id', productController.showProductDetails);

//  ****    GET:PRODUCT-CREATE    ****
productRouter.get('/create', productController.create);
//  ****    POST:PRODUCT-STORE
productRouter.post('/', uploadFile.single('productImage'), productController.store);

//  ****    GET:PRODUCT-EDIT    ****
productRouter.get('/update/:id', productController.edit);
//  ****    PUT:PRODUCT-UPDATE    ****
productRouter.put('/update/:id', uploadFile.single('productImage'), productController.update);

//  ****    DELETE    ****
productRouter.delete('/delete/:id', productController.delete);


module.exports = productRouter;