const express = require("express");
const router = express.Router();


//Controller
const apiProducts = require('../../controllers/api/apiController')


// Rutas - listar las peliculas
router.get("/Productos", apiProducts.list);

module.exports = router;