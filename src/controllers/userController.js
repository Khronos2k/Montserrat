const path = require('path')
const userController = {
    showLogin: (req, res) => {
        // res.sendfile(path.join(__dirname, '../views/login.html'))
        res.render('log/login');
    },
    showRegister: (req, res) => {
        res.render('log/register');
    }
}

module.exports = userController;