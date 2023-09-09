const productController = {
    index: (req, res) => {
        res.render('cart/products')
    },
    showProductCart: (req, res) => {
        res.render('cart/productCart')
    },
    showProductDetails: (req,res) => {
        res.render('cart/productDetail')
    },
}

module.exports = productController;