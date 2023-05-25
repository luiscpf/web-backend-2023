var express = require('express');
//
var mysql = require('mysql');
var router = express.Router();

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'backend7'
});

/* GET users listing. */
router.get('/', function(req, res, next) {
    connection.query("SELECT * FROM persons", (err, results, fields)=>{
        res.send(results);
    })
    //res.send('respond with a resource from PERSONS');
});

//VAI BUSCAR IDS DEFINIDOS EM SQL
router.get('/:id', function(req, res, next) {
    //var id = req.params.id
    connection.query('SELECT * FROM `persons` WHERE `id` = ?', [req.params.id], (err, results, fields)=>{
        res.send(results);
    })
  
});

router.get('/:age/:profession', function(req, res, next){
    var age = req.params.age;
    var profession = req.params.profession;
    connection.query('SELECT * FROM `persons` WHERE age = ? AND profession = ?', [age, profession], (err, results, fields)=>{
       res.send(results);
    })
})

router.delete('/:id', function(req, res, next){
    var id = req.params.id
    connection.query('DELETE FROM `persons` WHERE `id` = ?', id, (err, results, fields)=>{
        if (results.affectedRows == 0){
            res.status(404).end("ID" + id + "not found.");
        }
        else{
            res.send(results);
        }
    })
});

//GERADO COM AUTOINCREMENTO NAO SAO RECUPERAVEIS DELETEDES

router.post('/', function(req, res, next){
    var person = req.body;
    //SET Insert Into e Values
    connection.query('INSERT INTO `persons` SET ?', person, (err, results, fields)=>{
        res.send(results);
        
    })
});

//Update details of a person with existing ID

router.put('/:id', (req, res, next) => {
    var person = req.body;
    var id = req.params.id;
    //?-> representa variaveis
    connection.query('UPDATE persons SET ? WHERE id=?', [person, id], (err, results, fields)=>{
        if(err){
            res.status(500).end("Error while performing query! ");
        } 
        else if (results.affectedRows == 0){
            res.status(404).end("ID not found.");
        }
        else{
            res.send(results);
        }
    })
   
});

//NODEMON NO PROMPT para não ter de estar sempre a reiniciar o terminal 






// //idade profissão
// router.get('/:age', function(req, res, next) {
//     connection.query('SELECT * FROM `persons` WHERE `age` = ?', [req.params.age], (err, results, fields)=>{
//         res.send(results);
//     })
//     //res.send('respond with a resource from PERSONS');
// });


module.exports = router;
