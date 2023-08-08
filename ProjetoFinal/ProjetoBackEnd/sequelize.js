const { Sequelize, DataTypes } = require('sequelize');

const UserDataModel = require('./models/user');
const TransportDataModel = require('./models/transport');
const AlimentacaoDataModel = require('./models/alimentacao');
const GastoDataModel = require('./models/gastos');

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
const sequelize = new Sequelize(process.env.DB_SCHEMA, process.env.DB_USER, process.env.DB_PASSWORD ,  {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
  }
});

const User = UserDataModel(sequelize, DataTypes);
const Transport = TransportDataModel(sequelize, DataTypes);
const Alimentacao = AlimentacaoDataModel(sequelize, DataTypes);
const Gasto = GastoDataModel(sequelize, DataTypes);


//Define Relations between tables
Transport.hasMany(User, { onDelete: 'CASCADE' , onUpdate: 'CASCADE'}); // FK GOES TO USER

Alimentacao.hasMany(User, { onDelete: 'CASCADE' , onUpdate: 'CASCADE'}); // FK GOES TO USER

Gasto.hasOne(User, { onDelete: 'CASCADE' }); // FK GOES TO USER

// Adicionar o modelo à BD
/*
sequelize.sync({ force: false })
  .then(() => {
    console.log("Tables Created!");

    Transport.bulkCreate([
      { nome: "Carro", descricao: "veiculo particular", emissoes: 80 },
      { nome: "Bicicleta", descricao: "Meio de Transporte nao motorizado", emissoes: 0 },
      { nome: "Transporte Publico", descricao: "Autocarro", emissoes: 120 },
      { nome: "Mota", descricao: "veiculo particular", emissoes: 60 },
      { nome: "Comboio", descricao: "veiculo publico", emissoes: 180 },
      { nome: "A pé", descricao: "Andar a pe", emissoes: 0 }
    ])
      .then(() => {
        return Transport.findAll();
      })
      .then(() => {
        console.log(Transport.findAll());
      });

    Alimentacao.bulkCreate([
      { escolha: "Carnivoro", agua_diaria: 2, niveis_ferro: "Saudavel" },
      { escolha: "Pescetariano", agua_diaria: 4, niveis_ferro: "Saudavel" },
      { escolha: "Vegetariano", agua_diaria: 3, niveis_ferro: "Baixo" },
      { escolha: "Vegano", agua_diaria: 1, niveis_ferro: "Baixo" }
    ])
      .then(() => {
        return Alimentacao.findAll();
      })
      .then(() => {
        console.log(Alimentacao.findAll());
      });

    Gasto.bulkCreate([
      { tipo: "Minimo", agua_diaria: 6, papel_diario: 3, plastico_diario: 2 },
      { tipo: "Medio", agua_diaria: 10, papel_diario: 6, plastico_diario: 4 },
      { tipo: "Elevado", agua_diaria: 14, papel_diario: 8, plastico_diario: 6 }
    ])
      .then(() => {
        return Gasto.findAll();
      })
      .then(() => {
        console.log(Gasto.findAll());
      });

    User.bulkCreate([
      { email: "cmas29160@gmail.com", password: "123456", transportId: 1, alimentacaoId: 2, gastoId: 2 },
      { email: "daa@gmail.com", password: "werr" },
      { email: "fada@gmail.com", password: "tetrtrtst" },
      { email: "lada@gmail.com", password: "tetryryst" }
    ])
      .then(() => {
        return User.findAll();
      })
      .then(() => {
        console.log(User.findAll());
      });
  });
*/
module.exports = {
  User, Transport, Alimentacao, Gasto
}