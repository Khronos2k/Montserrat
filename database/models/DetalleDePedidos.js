
module.exports = (sequelize,DataTypes) => {
    const DetalleDePedido = sequelize.define("DetalleDePedido",{
        ID_Pedido:{
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        ID_Producto:{
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        Cantidad:{
            type: DataTypes.DECIMAL
        }
    },
    {
        tablaName: "detalledepedido",
        timestamps: false,
    }
    );
    return DetalleDePedido;
};
