
module.exports = (sequelize,DataTypes) => {
    const Usuario = sequelize.define("Usuario",{
        ID_usuario:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement : true

        },
        nombre:{
            type: DataTypes.STRING(50)
        },
        apellido:{
            type: DataTypes.STRING(50)
        },
        correo_electronico:{
            type: DataTypes.STRING(50)
        },
        contraseña:{
            type: DataTypes.STRING(50)
        },
        direccion:{
            type: DataTypes.STRING(100)
        },
        telefono:{
            type: DataTypes.STRING(15)
        }
    },
    {
        tableName: "usuarios",
        timestamps: false,
    }
    );
    return Usuario;
};

