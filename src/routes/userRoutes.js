const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/userController');
//  ****    Middlewares    ****
function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}

// Rutas que requieren autenticación
userRouter.get('/profile/:id', isAuthenticated, userController.showProfile);
//  ****    GET:USERS-LIST    ****
userRouter.get('/list', userController.showList);
//  ****    GET:USER-LOGIN    ****
userRouter.get('/login', userController.showLogin);
//  ****    GET:USER-PROFILE    ****
userRouter.get('/profile/:id', userController.showProfile);

//  ****    GET:USER-CREATE    ****
userRouter.get('/register', userController.showCreate);
userRouter.post('/register',userController.store);

//  ****    POST:USER-STORE    ****
userRouter.put('/', userController.store);

//  ****    GET:USER-EDIT    ****
userRouter.get('/update/:id', userController.showEdit);
//  ****    PUT:USER-UPDATE    ****
userRouter.put('/update/:id', userController.update);

//  ****    DELETE    ****
userRouter.get('/delete/:id', userController.delete);

module.exports = userRouter;