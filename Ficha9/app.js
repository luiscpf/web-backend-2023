//1->Ligar ao Servidor HTTP
const express = require('express');
const Sequelize = require('sequelize');
const app = express();
const port = 3000;

//NODE APP.js para por a correr

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('swagger-output.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


//middleware que converte o body para json string, tudo o que e recebido no body e convertido para JSON
app.use(express.json()); //utiliza middleware é função use

app.listen(port, () =>{
    console.log("Server is running");
})

//2->Ligação Base Dados SEQUELIZE

// const sequelize = new Sequelize('ficha9be','root','password', {   
const sequelize = new Sequelize('ficha9be','root','', {
    dialect: 'mysql'
});

sequelize.authenticate()
    .then(()=>{
        console.log("Connection has been established");
    })
    .catch(err =>{
        console.log("Unable to connect", err);
    });

//CRIAR MODELO

const Person = sequelize.define('person',{
    //atributos~
    firstname:{
        type: Sequelize.STRING,
        allowNull: false
    },
    lastname:{
        type: Sequelize.STRING
        // allowNull default true
    },
    profession:{
        type: Sequelize.STRING
        // allowNull default true
    },
    age:{
        type: Sequelize.INTEGER
        // allowNull default true
    }

});


//Sync and Cria database Bulk tem de estar comentado a quando da criação

sequelize.sync({force: false})
    .then(()=> {
        console.log('Database & tables created!');
        })
        .then(function(){
            return Person.findAll();
        })
        .then(function(persons){
            console.log(persons);
        });

/*Para não estar sempre a criar novas inserçoes sempre que node app.js ativos chama-se people na base dados*/

// Person.bulkCreate([
//     { firstname: 'Pedro', lastname: 'Jardim', profession: 'IT', age: 62 },
//     { firstname: 'Manel', lastname: 'Matos', profession: 'IT', age: 22 },
//     { firstname: 'Marta', lastname: 'Figueira', profession: 'IT', age: 32 },
//     { firstname: 'Ana', lastname: 'Duarte', profession: 'IT', age: 82 },
//     { firstname: 'Luís', lastname: 'Faria', profession: 'IT', age: 42 }
//     ]).then(function () {
//     return Person.findAll();
//     }).then(function (persons) { console.log(persons);
//     });



/**Queries/enndpoints */

//json para objeto {...}
//send string estado http {} é mais geral

/*Listar todas as pessoas existentes na tabela Persons e devolver a resposta no body*/
// app.get('/persons', function(req, res, next) {
//     Person.findAll(req.body).then(results => {
//         res.json(results)
//         // res.send(results);
//     })
   
// });

/*Adicionar uma nova pessoa à tabela Persons, o ID deve ser gerado automaticamente pelo MySQL
tendo em conta o número de pessoas existentes. O ID da pessoa adicionada deve ser devolvido
na resposta. */

app.post('/persons', function(req, res, next) {

    Person.create(req.body).then(results => {
        console.log('Auto generated ID number:', results.id);
        res.send('Auto generated ID number:' +  results.id);
    })
});

/*Apagar uma pessoa da tabela Persons pelo seu ID recebido no body. O número de linhas afetadas
deve ser devolvido na resposta. Caso a pessoa a apagar não exista o erro deverá ser tratado de
forma adequada. */
app.delete('/people/body', function(req, res, next) {
    Person.destroy({
        where: {
            id: req.body.id
        }
    }).then(() =>{
        res.send('ID sucessfully deleted');
    })
}); 

/*Apagar uma pessoa da tabela Persons pelo seu ID recebido como parâmetro. O número de linhas
afetadas deve ser devolvido na resposta. Caso a pessoa a apagar não exista o erro deverá ser
tratado de forma adequada */

app.delete('/people/:id', function(req, res, next) {
    Person.destroy({
        where: {
            id: req.params.id
        }
    }).then(()=>{
        res.send('ID sucessfully deleted');    
    })
}); 

/*Listar todas as pessoas existentes na tabela Persons e devolver a resposta no body*/
/*Selecionar apenas uma pessoa pelo seu ID (como query) e devolver essa mesma pessoa na
resposta. Caso a pessoa a selecionar não exista, o erro deverá ser tratado de forma adequada.*/

app.get('/persons', function(req, res, next){

    var id = req.query.id;

    if(id==undefined){
        Person.findAll().then(results => {
            res.send(results);
            // res.send(results);
        })
    }else{
        Person.findByPK(id).then(results => {
            res.send(results);
            // res.send(results);
        })

    }
    
 
});
/*Selecionar as pessoas pelo sua idade e profissão. Devolver todas as pessoas que reúnam essas
condições. Caso não exista, o erro deverá ser tratado de forma adequada. */
    
    //FROM persons", (err, results, fields)=>{
     //   res.send(results);

    //res.send('respond with a resource from PERSONS');
