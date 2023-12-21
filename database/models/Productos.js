
module.exports = (sequelize,DataTypes) => {
    const Productos = sequelize.define("Producto",{
        ID_Producto:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement : true
        },
        nombre:{
            type: DataTypes.STRING
        },
        tipo:{ 
            type: DataTypes.STRING(30)
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
        tableName: "productos",
        timestamps: false,
    }
    );
    return Productos;
};