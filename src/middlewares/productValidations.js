//  **** Express Validator ****
const {body} = require('express-validator');

const validateCreateForm = [
    body('name')
        .notEmpty().withMessage('Debes completar el campo nombre'),
    body('type')
        .notEmpty().withMessage('Debes seleccionar un tipo de producto'),
    body('price')
        .notEmpty().withMessage('Debes completar el campo precio').bail()
        .isNumeric().withMessage('Debes insertar un número'),
    body('discount')
        .isLength({min: 0, max: 2}).withMessage('El descuento no debe ser mayor a 100%'),
    body('category')
        .notEmpty().withMessage('Debes completar el campo categoría'),
];

module.exports = validateCreateForm;