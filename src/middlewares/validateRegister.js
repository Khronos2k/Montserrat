// Requires! Modules
const { body, validationResult } = require('express-validator');
const path = require('node:path');
const fs = require('node:fs');
const data = require('../data/users.json');

const arrRegister = [
    body("Nombre y Apellido").notEmpty().withMessage("Usuario valido"),
    body("E-mail").notEmpty().withMessage("Ingresar e-mail").bail().isEmail().withMessage("E-mail válido"),
    body("contraseña").notEmpty().withMessage("Contraseña")
];

const validateRegister = ( req, res, next) =>{

    const errors = validationResult(req);

    try{
        if(errors.isEmpty()){
            next()
    
        }else{
            throw errors
        }

    }catch(err){
        res.render('create',{
            errors: err.mapped(),
            old: req.body
        })
    }



}

module.exports = {
    arrRegister,
    validateRegister
}