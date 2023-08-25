const express = require('express');
const app = express();
const path = require('path');
const indexRouter = require('./routes/indexRoute');
const productRouter = require('./routes/productRoute');
const userRouter = require('./routes/userRoutes');

const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));

app.set('view engine', 'ejs')
app.set('views', './src/views')
// app.set('views', './views/products')

app.use(indexRouter)
app.use('/product',productRouter)
app.use('/user', userRouter)


app.listen(3001, ()=>{
    console.log('Corriendo servidor en puerto 3001');
});