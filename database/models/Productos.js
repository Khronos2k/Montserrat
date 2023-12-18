
module.exports = (sequelize,DataTypes) => {
    const Productos = sequelize.define("Producto",{
        ID_Producto:{
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        nombre:{
            type: DataTypes.STRING
        },
        tipo:{ 
            type: DataTypes.STRING(30)
        },
        Descripcion:{
            type: DataTypes.STRING
        },
        Precio:{
            type: DataTypes.DECIMAL
        },
        Imagen:{
            type: DataTypes.STRING
        },
        Categoria:{
            type: DataTypes.STRING
        },
    },
    {
        tablaName: "productos",
        timestamps: false,
    }
    );
    return Productos;
};
