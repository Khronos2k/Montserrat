const { raw } = require("mysql2");
const db = require("./database/models");

// lo que traigo de la promesa, lo recivo con then(), es decir un resultado
//raw: true permite que me de solo resultados relevantes de la tablas 
db.Usuario.findAll({raw:true}).then((result) => console.log(result));
