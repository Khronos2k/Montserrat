const db = require('../../../database/models');



//Async siempre antes de la funcion
//dentro de la funcion abra codigo asincronico
module.exports = {
    list: async (req, res) =>{
        //no deja de leer hasta cumplir la promesa del data
        const data = await db.Producto.findAll();

        res.json({
            code: 200,
            total: data.length,
            data: data
        })
    }
}