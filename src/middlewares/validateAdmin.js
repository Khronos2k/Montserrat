const data = require('../data/users.json');

const validateAdmin = ( req, res, next ) =>{
    
    const user = req.query.user;
    const searchAdmin = data.find( admin => admin.username === user)


    if(searchAdmin){
        next()
    }else{
        res.send('No tienes los privilegios para ingresar');
    }
    
}

module.exports = validateAdmin;