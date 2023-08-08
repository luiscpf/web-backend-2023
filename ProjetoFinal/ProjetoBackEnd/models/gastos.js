module.exports = (sequelize, DataTypes) => {
    return sequelize.define('gastos', {
        tipo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        agua_diaria:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        papel_diario:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        plastico_diario:{
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    });
}