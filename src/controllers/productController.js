const fs = require('fs');
const products = require('../data/products.json');



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
        res.render('cart/productDetail', {product});
    },
    create: (req, res) => {
        res.render('cart/productCreate');
    },
    update: (req, res) => {
        res.render('cart/productUpdate')
    }
}

module.exports = productController;