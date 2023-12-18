const fs = require('fs');
const path = require('path');
const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
const db = require('../../database/models');
const bcrypt = require('bcrypt');

// Método para verificar si un usuario existe en la base de datos
async function userExists(username) {
    // Realiza una consulta a la base de datos para buscar al usuario
    const user = await db.Usuario.findOne({ where: { username: username } });
    // Si el usuario existe, devuelve true. Si no, devuelve false.
    return user !== null;
}



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
    store: async (req, res) => {
        const data = req.body;

        const index = users.length == 0 ? 0 : users[users.length -1].id;
        console.log(req.body);
        try{
        // Crea un nuevo usuario en la base de datos con los datos del formulario
        const dataCreate = {
            // ID_usuario: 1,
            nombre: data.nombre,
            apellido: data.apellido,
            correo_electronico: data.email,
            telefono: "3888",
            contraseña: data.confirmacion,
            direccion: "direccion",
            usuario: data.usuario
        } 
            const newUser = await db.Usuario.create(dataCreate);
            //req.flash('success_msg', 'Usuario creado exitosamente.');
            //Redirige al usuario a la página de usuarios
            return res.redirect("/");
            //return res.send(dataCreate)
            
            
        }catch(err){
             // Maneja cualquier error que pueda ocurrir
            console.error(err);
            res.status(500).send(err.message);
        }

        // users.push(newUser);
        // fs.writeFileSync(usersFilePath, JSON.stringify(users));
        // res.redirect("/users")
    },
    showEdit: async (req, res) => {
        try {
            // Busca al usuario en la base de datos
            const usuario = await Usuario.findByPk(req.params.id);
    
            // Renderiza la vista de edición con los datos del usuario
            res.render('edit', { usuario });
        } catch (err) {
            console.error(err);
            res.status(500).send(err.message);
        }
    },
    update: async  (req, res) => {
        try {
            // Actualiza el usuario en la base de datos
            await Usuario.update(req.body, {
                where: {
                    id: req.params.id
                }
            });
    
            // Redirige al usuario a la página de perfil
            res.redirect(`/users/profile/${req.params.id}`);
        } catch (err) {
            console.error(err);
            res.status(500).send(err.message);
        }
    },
    delete: async (req, res) => {
        try {
            // Elimina el usuario de la base de datos
            await Usuario.destroy({
                where: {
                    id: req.params.id
                }
            });
    
            // Redirige al usuario a la página de lista de usuarios
            res.redirect('/users/list');
        } catch (err) {
            console.error(err);
            res.status(500).send(err.message);
        }
    },

    login: async (req, res) => {
        // Obtiene el nombre de usuario y la contraseña del cuerpo de la solicitud
        const { usuario, contraseña } = req.body;
        // Verifica si el usuario existe
        const user = await db.Usuario.findOne({ where: { usuario: usuario } });
        if (user) {
            // Si el usuario existe, verifica la contraseña
            const match = await bcrypt.compare(contraseña, user.contraseña);
            if (match) {
                // Si la contraseña es correcta, maneja la sesión
                // ...
                res.send('Login exitoso');
            } else {
                // Si la contraseña es incorrecta, envía un mensaje de error
                res.status(401).send('Contraseña incorrecta');
            }
        } else {
            // Si el usuario no existe, envía un mensaje de error
            res.status(404).send('Usuario no encontrado');
        }
    }

}

module.exports = userController;

// En este código, Usuario.findByPk(req.params.id) busca un usuario en la base de datos por su ID primaria
// Usuario.update(req.body, { where: { id: req.params.id } }) actualiza un usuario en la base de datos con los datos del formulario
// Y Usuario.destroy({ where: { id: req.params.id } }) elimina un usuario de la base de datos.
