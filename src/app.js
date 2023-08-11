const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));

app.listen(3001, ()=>{
    console.log('Corriendo servidor en puerto 3001');
});

app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './views/index.html'))
})

app.get('/sign-in', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './views/login.html'))
})

app.get('/cart', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './views/productCart.html'))
})

app.get('/details', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './views/productDetail.html'))
})

app.get('/register', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './views/register.html'))
})

app.get('/menu', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './views/menu.html'))
})