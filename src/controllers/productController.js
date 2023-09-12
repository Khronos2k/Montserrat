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
        const id = req.params.id;
        // console.log(id);
        const product = products.find(item => item.id == id);
        console.log(product);
        res.render('cart/productDetail', {product})
    },
}

module.exports = productController;