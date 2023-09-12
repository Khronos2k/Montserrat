const products = require('../data/testData');

// console.log(products);

const productController = {
    index: (req, res) => {
        res.render('cart/products', {products})
    },
    showProductCart: (req, res) => {
        res.render('cart/productCart')
    },
    showProductDetails: (req,res) => {
        res.render('cart/productDetail')
    },
}

module.exports = productController;