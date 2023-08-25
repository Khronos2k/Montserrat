const productController = {
    showProductsAll: (res, req) => {
        res.render('productAll')
    },
    showProductDetails: (res,req) => {
        res.render('productDetail')
    },
    showProductCart: (res, req) => {
        res.render('productCart')
    }
}

module.exports = productController;