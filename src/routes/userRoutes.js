const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/userController');

userRouter.get('/login', userController.showLogin);
userRouter.get('/register', userController.showRegister)

module.exports = userRouter;