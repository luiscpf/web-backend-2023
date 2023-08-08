// TODO Implement all the models and business logic using sequelize
const { Sequelize, DataTypes } = require('sequelize');

const UserDataModel = require('./models/Users');



 // initialize data base
const sequelize = new Sequelize(process.env.DB_SCHEMA,
    process.env.DB_USER, process.env.DB_PASS,  {
    dialect: 'mysql',
    host: process.env.DB_HOST,
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000


    }
}); 

const Users = UserDataModel(sequelize, DataTypes);

//AUTENTIFICAÇÂO À BD

sequelize.authenticate().then(() => {
    console.log('Connection has been established');
}).catch(err => {
    console.error('Unable to connect', err);
});

sequelize.sync({ force: false }).then( () => {
    console.log('Database & tables created!');
}).then(() => {
    return Users.findAll();
});

// Users.Create({email: 'dada@getMaxListeners.com', password: '12345678'});

module.exports = {
    Users
}




