const express = require('express');
const productRouter = express.Router();
const path = require('path');
// **** Multer ****
const multer = require('multer');
// **** Controllers ****
const productController = require('../controllers/productController');

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

//  *** GET PRODUCT-LIST ***
productRouter.get('/', productController.index);
//  *** CREATE ***
productRouter.get('/create', productController.create);
productRouter.post('/', uploadFile.single('productImage'), productController.store);
//  *** GET CART-LIST ***
productRouter.get('/cart', productController.showProductCart);

//  *** GET PRODUCT ***
productRouter.get('/details/:id', productController.showProductDetails);

//  *** GET EDIT FORM ***
productRouter.get('/update/:id', productController.edit);
//  *** PUT UPDATE ***
productRouter.put('/update/:id',uploadFile.single('productImage'), productController.update);

//  *** DELETE ***
productRouter.delete('/delete/:id', productController.delete);


module.exports = productRouter;