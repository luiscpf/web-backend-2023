module.exports = (sequelize, DataTypes) => {
    return sequelize.define('transports', {
        nome:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        descricao:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        emissoes:{
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    });
}