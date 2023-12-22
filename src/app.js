//  *Expres: require - (don't modify)

const express = require('express');
const app = express();
//  *Path: require - (don't modify)
const path = require('path');
//  *Override: require - (don't modify)
const methodOverride = require('method-override');

//  *------v
const cookieParser = require('cookie-parser');
//  *Express: ubicación de los archivos de imagenes & estilos - (don't modify)
const publicPath = path.resolve(__dirname, '../public');

const apiProductsRoutes = require('./routes/api/apiProducts');
//Error a corregir
// const apiUsersRoutes = require('./routes/api/apiUsers');



/**
 * CORS: es un paquete que simplifica la configuración de políticas de acceso cruzado (CORS) en 
 * Express.
 */
const cors = require("cors");

/**
 * Especifica que se permite el acceso desde cualquier origen (origin: "*")
 * Esto permite que cualquier dominio realice solicitudes al servidor
 */
let corsOptions = {
    origin: "*"
};

app.use(cors(corsOptions));

/**
 * Esto define una función llamada allowCrossDomain, que actúa como un middleware personalizado.
 * La función toma tres argumentos: req (la solicitud), res (la respuesta) y next (una función que
 * permite pasar la solicitud al siguiente middleware
 */
let allowCrossDomain = function(req, res, next) {
/**
   *  Se establecen varias cabeceras de respuesta (res.header) para permitir que diferentes dominios 
   *  realicen solicitudes a tu servido
   */
    res.header('Access-Control-Allow-Origin', "*");
    res.header("Access-Control-Allow-Methods", "OPTIONS, POST, GET, PUT, DELETE");
    res.header('Access-Control-Allow-Headers', "*");
    res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With")
    next();
}

  // Se ejecuta el middleware creado
app.use(allowCrossDomain);














//  **** Middlewares ****
app.use('/api', apiProductsRoutes);



app.use(express.static(publicPath));  
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());
app.use(methodOverride('_method'));

//  *Express: indicamos la utilización de template engine y la ubicación de las vistas - (don't modify)
app.set('view engine', 'ejs')
app.set('views', './src/views');


//  **** Routes: require routes ****
const indexRouter = require('./routes/indexRoute');
const productRouter = require('./routes/productRoute');
const userRouter = require('./routes/userRoutes');


//  **** Rotes: rutas de la página web ****
app.use(indexRouter)
app.use('/product', productRouter)
app.use('/user', userRouter)


app.use((req, res, next) => {
    res.status(404).render('home/404');
});

// Server: 3001 - (don't modify)
app.listen(3002, ()=>{
    console.log('Corriendo servidor en puerto 3002');
});