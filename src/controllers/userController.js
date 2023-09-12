const fs=require('fs')
const path = require('path')
const users = path.join(__dirname,'..','data','users.json')
const user = require('../data/users.json')  
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")
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