// const fs=require('fs')
// const path = require('path')
// const users = path.join(__dirname,'..','data','users.json')
// const user = require('../data/users.json')  
// const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")

const User = require('../models/user');

const userController = {

    showLogin: (req, res) => {
        res.render('log/login');
    },


    showRegister: (req, res) => {
        res.render('log/register');
    },

    createUser: (req, res) => {
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });

        newUser.save().then(() => {
            res.redirect('/users');
        })
            .catch((err) => {
                console.log(err);
                res.redirect('/error');
            });
    },

    readUser: (req, res) => {
        User.findById(req.params.id)
            .then((user) => {
                res.render('users/show', { user });
            })
            .catch((err) => {
                console.log(err);
                res.redirect('/error');
            });
    },


    updateUser: (req, res) => {
        User.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
            .then(() => {
                res.redirect('/users');
            })
            .catch((err) => {
                console.log(err);
                res.redirect('/error');
            });
    },


    deleteUser: (req, res) => {
        User.findByIdAndDelete(req.params.id)
            .then(() => {
                res.redirect('/users');
            })
            .catch((err) => {
                console.log(err);
                res.redirect('/error');
            });
    }
};

module.exports = userController;