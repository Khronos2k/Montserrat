//  *Expres: require - (not modify)
const express = require('express');
const app = express();

//--
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

//  **Routes: require routes
const indexRouter = require('./routes/indexRoute');
const productRouter = require('./routes/productRoute');
const userRouter = require('./routes/userRoutes');
//  *Path: require - (not modify)
const path = require('path');

//  *Express: ubicación de los archivos de imagenes & estilos - (not modify)
const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));

//--
app.use(express.urlencoded({extended:false}));
app.use(express.json())

//  *Express: indicamos la utilización de template engine y la ubicación de las vistas - (not modify)
app.set('view engine', 'ejs')
app.set('views', './src/views');

//  **Rutas: rutas de la página web
app.use(indexRouter)
app.use('/product', productRouter)
app.use('/user', userRouter)


// *Server: 3001 - (not modify)
app.listen(3001, ()=>{
    console.log('Corriendo servidor en puerto 3001');
});