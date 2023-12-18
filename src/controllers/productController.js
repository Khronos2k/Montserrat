
// const path = require('path');


// //  ****    Expresión regular   ****
// const toThousend = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

// const { validationResult } = require('express-validator');
// const DetalleDePedidos = require('../../database/models/DetalleDePedidos');
// const Productos = require('../../database/models/Productos.js');

// const productController = {
    
//     index: (req, res) => {
//         Productos.findAll().then((products) => {
//                 res.render('cart/products', {products: productos, toThousend});
//             })
//             .catch((error) => {
//                 console.error('Error al obtener los productos:', error);
//             });
//     },

//     showProductCart: (req, res) => {
//         // Asume que tiene un modelo Pedidos que representa los pedidos
//         const Pedidos = require('../../database/models/Pedidos.js'); 
    
//         // Asume que el ID del pedido/carrito de compras está en req.session.pedidoId
//         const pedidoId = req.session.pedidoId;
    
//         Pedidos.findByPk(pedidoId, {
//             include: Productos // Incluye los productos en el pedido
//         })
//         .then((pedido) => {
//             res.render('cart/productCart', {pedido});
//         })
//         .catch((error) => {
//             console.error('Error al obtener el pedido:', error);
//         });
//     },

//     showProductDetails: (req,res) => {
//         const id = req.params.id;
//         Productos.findByPk(id)
//             .then((product) => {
//                 res.render('cart/productDetail', {product, toThousend});
//             })
//             .catch((error) => {
//                 console.error('Error al obtener el producto:', error);
//             });
//     },
//     create: (req, res) => {
//         res.render('cart/productCreate');
//     },
//     store: (req, res) => {
//         let errors = validationResult(req);

//         if (errors.isEmpty() && req.file) {
//             const data = req.body;

//             const newProduct = {
//                 nombre: data.name,
//                 tipo: data.type,
//                 precio: data.price,
//                 descuento: data.discount,
//                 Categoria: data.category,
//                 imagen: req.file.filename,
//             };
            
//             Productos.create(newProduct)
//                 .then(() => {
//                     res.redirect("/product");
//                 })
//                 .catch((error) => {
//                     console.error('Error al crear el producto:', error);
//                 });
//         } else {
//             res.render('cart/productCreate', {errors: errors.mapped(), oldData: req.body});
//         }
//     },
//     edit: (req, res) => {
//         const id = req.params.id;
//         Productos.findByPk(id)
//             .then((product) => {
//                 res.render('cart/productUpdate', {productToEdit: product});
//             })
//             .catch((error) => {
//                 console.error('Error al obtener el producto:', error);
//             });
//     },

//     update: (req, res) => {
//         const id = req.params.id;
//         const editProduct = req.body;

//         Productos.update({
//             name: editProduct.name,
//             type: editProduct.type,
//             price: editProduct.price,
//             discount: editProduct.discount,
//             category: editProduct.category,
//             image: req.file.filename,
//         }, {
//             where: {
//                 id: id
//             }
//         })
//         .then(() => {
//             res.redirect("/product");
//         })
//         .catch((error) => {
//             console.error('Error al actualizar el producto:', error);
//         });
//     },

//     delete: (req, res) => {
//         const id = req.params.id;
        
//         Productos.destroy({
//             where: {
//                 id: id
//             }
//         })
//         .then(() => {
//             res.redirect("/product");
//         })
//         .catch((error) => {
//             console.error('Error al eliminar el producto:', error);
//         });
//     }
// }
// module.exports = productController;

const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');

const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
//  ****    Expresión regular   ****
const toThousend = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const { validationResult } = require('express-validator')
const DetalleDePedidos = require('../../database/models/DetalleDePedidos');
const Productos = require('../../database/models/Productos.js');


const productController = {
    index: (req, res) => {
        res.render('cart/products', {products, toThousend});
    },
    showProductCart: (req, res) => {
        res.render('cart/productCart');
    },
    showProductDetails: (req,res) => {
        const id = req.params.id;
        const product = products.find(item => item.id == id);
        res.render('cart/productDetail', {product, toThousend});
    },
    create: (req, res) => {
        res.render('cart/productCreate');
    },
    store: (req, res) => {
        let errors = validationResult(req);

        if (errors.isEmpty() && req.file) {
            const data = req.body;

            let index = products.length == 0 ? 0 : products[products.length -1].id;

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
        } else {
            res.render('cart/productCreate', {errors: errors.mapped(), oldData: req.body});
        }
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
    }
}
module.exports = productController;