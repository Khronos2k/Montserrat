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

//  **** Middlewares ****


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