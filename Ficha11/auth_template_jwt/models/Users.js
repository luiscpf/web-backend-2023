/**Na pasta models defina o modelo Users que possui as seguintes colunas: */

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Users', {
        email:{
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false,
    
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false,
        },
    }

)}
