const path = require('path')
const userController = {
    showLogin: (req, res) => {
        // res.sendfile(path.join(__dirname, '../views/login.html'))
        res.render('login');
    },
    showRegister: (req, res) => {
        res.render('register');
    }
}

module.exports = userController;