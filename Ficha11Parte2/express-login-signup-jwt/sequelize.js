const Sequelize = require('sequelize');
const UserModel = require('./models/user');

// Connection pool  CRIA AS TABELAS NO AZURE
/* const sequelize = new Sequelize(process.env.DB_SCHEMA , process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  dialectOptions: {
    ssl: {
       require: false
    }
  },
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  port:3306
}); */

// CRIA AS TABELAS NO MYSQL
const sequelize = new Sequelize("users", "root", "password", {
  host: "localhost",
  dialect: 'mysql',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }  
});

const User = UserModel(sequelize, Sequelize);


// Adicionar o modelo à BD
sequelize.sync({ force: true })
    .then(() => {
        console.log("Tables Created!");
        User.bulkCreate([
            { email: "dada@gmail.com", password: "test"},
            { email: "daa@gmail.com", password: "werr"},
            { email: "fada@gmail.com", password: "tetrtrtst"},
            { email: "lada@gmail.com", password: "tetryryst"},
           
        ]).then(() => {
                return User.findAll();
            })
            .then((users) => {
                console.log(users);
            });
    });

module.exports = {
  User
}