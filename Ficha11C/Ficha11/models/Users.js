module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Users', {
        password:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        /*first_name:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        last_name:{
            type: DataTypes.STRING,
            allowNull: true,
        },*/
        }
    )}