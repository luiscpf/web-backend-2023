module.exports = (sequelize, DataTypes) => {
    return sequelize.define('alimentacaos', {
        escolha:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        agua_diaria:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        niveis_ferro:{
            type: DataTypes.STRING,
            allowNull: false,
        }
    });
}