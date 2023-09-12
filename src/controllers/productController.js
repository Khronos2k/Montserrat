const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json')

const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
//  *** Expresión regular ***
const toThousend = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

// console.log(products);

const productController = {
    index: (req, res) => {
        res.render('cart/products', {products, toThousend})
    },
    showProductCart: (req, res) => {
        res.render('cart/productCart')
    },
    showProductDetails: (req,res) => {
        const id = req.params.id;
        const product = products.find(item => item.id == id);
        console.log(product);
        res.render('cart/productDetail', {product, toThousend});
    },
    edit: (req, res) => {
        const id = req.params.id;
        const product = products.find(item => item.id == id);
        res.render('cart/productUpdate', {productToEdit: product});
    },
    update: (req, res) => {
        res.send('modificado');
    },

    delete: (req, res) => {
        res.send('eliminado')
    },

    create: (req, res) => {
        res.render('cart/productCreate');

    },
    store: (req, res) => {
        const data = req.body;
        // res.send(data)
        const index = products[length.length -1].id;
        const newProduct = {
            id: index+1,
            name: data.name,
            price: data.price,
            discount: data.discount,
            type: data.type,
            image: "default-image.png",
        };
        products.push(newProduct);

        fs.writeFileSync(productsFilePath, JSON.stringify(products));
        res.send('ok');
        // res.redirect('//');
    }
}
module.exports = productController;