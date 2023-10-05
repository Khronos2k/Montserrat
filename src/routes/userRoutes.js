const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/userController');

/* ---Middleware--- */
const validateAdmin = require('../middlewares/validateAdmin');
const upload = require('../middlewares/multer');

/* ---Validacion--- */
const { arrValidate, validationSearch } = require('../middlewares/validateSearch');
const { arrRegister, validateRegister } = require('../middlewares/validateRegister');

userRouter.get('/', arrValidate, validationSearch, validateAdmin, userController.render);
userRouter.get('/login', userController.showLogin);

userRouter.get('/register', userController.showRegister)
userRouter.post('/register',upload.single('avatar'), arrRegister, validateRegister, userController.createUser);


module.exports = userRouter;