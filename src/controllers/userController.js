const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../data/users.json');

const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));



const userController = {
    showList: (req, res) => {
        res.render('log/users')
    },
    showLogin: (req, res) => {
        res.render('log/login');
    },
    showProfile: (req, res) => {
        res.render('log/userProfile')
    },
    showCreate: (req, res) => {
        res.render('log/register');
    },
    store: (req, res) => {
        const data = req.body;

        const index = users.length == 0 ? 0 : users[users.length -1].id;

        const newUser = {
            id: index + 1,
            name: data.name,
            lastName: data.lastName,
            email: data.email,
            cell: data.cell,
            password: data.password,
            category: data.category,
            image: data.image,
            address: data.address,
        };

        users.push(newUser);
        fs.writeFileSync(usersFilePath, JSON.stringify(users));
        res.redirect("/users")
    },
    showEdit: (req, res) => {
        
    },
    update: (req, res) => {
        
    },
    delete: (req, res) => {
        
    }
}

module.exports = userController;