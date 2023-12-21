
//Otra forma:
// const Pedido = sequelize.define(alias, columnas, config);

module.exports = (sequelize,DataTypes) => {
    const Pedido = sequelize.define("Pedido",{
        ID_Pedido:{
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        ID_Usuarios:{
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        Fecha_Pedido:{
            type: DataTypes.STRING
        },
        Direccion:{
            type: DataTypes.STRING
        },
        Estado:{
            type: DataTypes.STRING
        },
        Total:{
            type: DataTypes.DECIMAL
        }
    },
    {
        tablaName: "pedidos",
        timestamps: false,
    });

    // Pedido.associate = function(models){
    //     Pedido.belongsTo(models. )
    // }
    return Pedido;
};