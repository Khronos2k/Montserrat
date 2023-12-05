const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/userController');
//  ****    Middlewares    ****

//  ****    GET:USERS-LIST    ****
userRouter.get('/list', userController.showList);
//  ****    GET:USER-LOGIN    ****
userRouter.get('/login', userController.showLogin);
//  ****    GET:USER-PROFILE    ****
userRouter.get('/profile/:id', userController.showProfile);

//  ****    GET:USER-CREATE    ****
userRouter.get('/register', userController.showCreate);
//  ****    POST:USER-STORE    ****
userRouter.get('/', userController.store);

//  ****    GET:USER-EDIT    ****
userRouter.get('/update/:id', userController.showEdit);
//  ****    PUT:USER-UPDATE    ****
userRouter.get('/update/:id', userController.update);

//  ****    DELETE    ****
userRouter.get('/delete/:id', userController.delete);

module.exports = userRouter;