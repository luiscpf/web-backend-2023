const { Sequelize, DataTypes } = require('sequelize');

const UserDataModel = require('./models/Users');

//initialize data base
/*const sequelize = new Sequelize(process.env.DB_SCHEMA, process.env.USER, '', {
    dialect: 'mysql',
});
*/
const sequelize = new Sequelize(process.env.DB_SCHEMA, process.env.DB_USER, process.env.DB_PASSWORD ,  {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

const Users = UserDataModel(sequelize, DataTypes);

sequelize.authenticate().then ( () => {
    console.log('Connection has been established');
}).catch (err => {
    console.error('Unable to connect', err);
})

sequelize.sync({ force: false }).then( () => {
    console.log('Database & tables created!');
}).then(function () {
    return Users.findAll();
});
module.exports = {
    Users
}

/*
Users.bulkCreate([
    {password: '12345678', email: 'cmas29160@gmail.com'},
    {password: '87654321', email: 'luis@gmail.com'},
    {password: 'cristina', email: '000@gmail.com'},
    {password: 'asdasdasd', email: '1234@gmail.com'},
    {password: 'fhdgeufjs', email: 'pedro@gmail.com'},
]).then(function () {
    return Users.findAll();
});
*/
