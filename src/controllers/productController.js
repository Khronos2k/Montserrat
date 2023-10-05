const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json')

const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
//  ****    Expresión regular   ****
const toThousend = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

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
        res.render('cart/productDetail', {product, toThousend});
    },
    edit: (req, res) => {
        const id = req.params.id;
        const product = products.find(item => item.id == id);
        res.render('cart/productUpdate', {productToEdit: product});
    },
    update: (req, res) => {
        const id = req.params.id;
        const editProduct = req.body;
        const index = products.findIndex(product => product.id == id);

        products[index].name = editProduct.name;
        products[index].type = editProduct.type;
        products[index].price = editProduct.price;
        products[index].discount = editProduct.discount;
        products[index].category = editProduct.category;
        // products[index].image = editProduct.image;
        products[index].image = req.file.filename;

        fs.writeFileSync(productsFilePath, JSON.stringify(products));
        res.redirect("/product");
    },

    delete: (req, res) => {
        const id = req.params.id;
        // const index = products.findIndex(product => product.id == id);
        // console.log(index);
        const leftProducts = products.filter((product)=>product.id != id);
        
        fs.writeFileSync(productsFilePath, JSON.stringify(leftProducts));
        res.redirect("/product");
    },

    create: (req, res) => {
        res.render('cart/productCreate');
    },
    store: (req, res) => {
        const data = req.body;

        const index = products[products.length -1].id;
        
        const newProduct = {
            id: index + 1,
            name: data.name,
            type: data.type,
            price: data.price,
            discount: data.discount,
            category: data.category,
            image: req.file.filename,
        };
        products.push(newProduct);
        fs.writeFileSync(productsFilePath, JSON.stringify(products));
        res.redirect("/product");
    }
}
module.exports = productController;