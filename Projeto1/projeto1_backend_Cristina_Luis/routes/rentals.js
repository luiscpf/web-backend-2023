var express = require('express');

var mysql = require('mysql');

var router = express.Router();

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'projeto1_backend'
});


/*Parte A-exa) Listar todos os alugueres existentes na tabela e devolver na resposta*/

router.get('/', function(req, res, next){
    connection.query("SELECT * FROM rentals", (err, results, fields)=>{
        res.send(results);
    })

});


/*Parte A-exb) Adicionar um novo aluguer à base de dados. Deverá ser enviada uma mensagem de sucesso na resposta indicando o ID do aluguer adicionado*/

router.post('/', function(req, res, next){

    var person = req.body;
    //SET Insert Into e Values
    connection.query('INSERT INTO rentals SET ?', person, (err, results, fields)=>{
        if (err) {
            res.status(500).end('Error connecting to the server');
        } 
        else if(results.affectedRows == 0) {
            res.status(404).end("ID not found.");
        }
        else{
            
            //console.log para fazer verificação no terminal
            console.log(results.insertId);
            res.status(200).send('Rental inserted with success. Rental ID: ' + results.insertId);
        }
    })
});

/*Parte A-exc) Selecionar todos os alugueres de um determinado cliente e devolver essa lista na resposta */

router.get('/customer/:customer', function(req, res, next) {

   
    connection.query('SELECT * FROM rentals WHERE customer = ?', [req.params.customer], (err, results, fields)=>{
        res.send(results);
    })
  
});



/*Parte A-exd) Aplicar um desconto em percentagem no preço de um aluguer (via params) e atualizar a entrada. Devolver a entrada atualizada na resposta */

router.put('/discount/:id', (req, res, next) => {
    var person = req.body.price;
    var id = req.params.id;
    //?-> representa variaveis
    connection.query('UPDATE persons SET price= ? WHERE id=?', [person, id], (err, results, fields)=>{
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
// router.put('/:id/discount/:percent', function(req, res) {
//     var id = req.params.id;
//     var percent = req.params.percent;
  
//     // Get the rental with the specified id from the database
//     var sql = 'SELECT * FROM rentals WHERE id = ?';
//     connection.query(sql, [id], function(error, results, fields) {
//         if (error) throw error;
    
//         // Apply the discount to the rental's price
//         var rental = results[0];
//         var discountedPrice = rental.price * (1 - percent / 100);
    
//         // Update the rental's price in the database
//         var updateSql = 'UPDATE rentals SET price = ? WHERE id = ?';
//         connection.query(updateSql, [discountedPrice, id], function(error, results, fields) {
//             if (error) throw error;
    
//             // Get the updated rental from the database
//             var selectSql = 'SELECT * FROM rentals WHERE id = ?';
//             connection.query(selectSql, [id], function(error, results, fields) {
//                 if (error) throw error;
        
//                 // Return the updated rental in the response
//                 res.json(results[0]);
//             });
//         });
//     });
// });

/*Parte A-exe) Listar todos os alugueres anteriores a uma determinada data (via body) e devolver a lista na resposta. */

router.post('/before', function(req, res, next){
    const date = req.body.pickup_date;

    connection.query("SELECT * FROM rentals WHERE pickup_date < ?", date, (err, results, fields)=>{
        if (err) {
            res.status(500).end('Error connecting to the server');
        }
        else{
            console.log(results);
            res.send(results);

        } 
       
    })
});


/*Parte B-exa) Selecionar apenas um aluguer pelo seu ID (via params) e devolver o mesmo na resposta */

router.get('/ID/:id', function(req, res, next) {
    

    connection.query('SELECT * FROM rentals WHERE id = ?', [req.params.id], (err, results, fields)=>{
        res.send(results);
    })
  
});

/*Parte B-exb) Apagar um aluguer existente (via query) e atualizar a tabela, indicar mensagem de erro se o ID do aluguer a apagar não existir ou mensagem de sucesso caso seja apagado. */

router.delete('/delete/:id', function(req, res, next){

    connection.query('DELETE FROM rentals WHERE `id` = ?', [req.params.id], (err, results, fields)=>{
        if(err){
            res.status(500).end("Error connecting to the server");
        } 
        else if (results.affectedRows == 0){
            res.status(404).end("Rentals ID " + [req.params.id] + " not found.");
        }
        else{
            console.log(results.insertId);
            res.status(200).send('Rental with id: ' + [req.params.id] + ' deleted with sucess');
        }
    })
});

/**Parte B-exc) Selecionar todos os alugueres de uma determinada localização de entrega do carro e devolver essa lista na resposta.*/

router.get('/location/:return_location', function(req, res, next){
    
    connection.query('SELECT * FROM rentals WHERE return_location = ?', [req.params.return_location], (err, results, fields)=>{
       res.send(results);
    })
});

/*Parte B-ecd) Adicionar um comentário a um determinado aluguer (mantendo os anteriores) pelo seu ID e atualizar a tabela. Devolver a entrada atualizada na resposta.*/

// router.post(':id/comments', function(req, res, next){
    
//     //Extrair parametros
//     var id = req.params.id;
//     //Extrair data do request body
//     var comment = req.body.comments;

//     connection.query('SELECT * FROM rentals WHERE id= ?', id, (err, results, fields)=>{
//         if (err) {
//             res.status(500).end('Error while performing query!');
//         } else if (results.affectedRows == 0) {
//             res.status(404).end("ID" + id * " not found.");
//         } else {
//             //array com 1 row
//             var rental = results[];

//             // Append new comment to existing comments (if any)
//             var newComment = rental.comments;
//             if (newComment) {
//                 newComment += '\n' + comment;
//             } else {
//                 newComment = comment;
//             }

//             // Update rental record with new comment
//             connection.query('UPDATE rentals SET comments = ? WHERE id = ?', [newComment, id], (err, results, fields) => {
//                 if (err) {
//                     res.status(500).end('Error while performing query!');
//                 } else {
//                     // Return updated rental record in response
//                     rental.comments = newComment;
//                     res.status(200).send(rental);
//                 }
//             });
//         }
//     });
// });

/*Parte B-exe) Listar todos os alugueres ordenados por ordem crescente de preço e devolver a lista ordenada na resposta. A ordenação terá que ser efetuada em Javascript*/

router.get('/highprice', function(req, res, next){
    // var price = req.params.price;
    connection.query('SELECT * FROM rentals', [req.params.price], (err, results, fields)=>{
        if (err) {
            console.log(err);
            res.status(500).send('Error connecting to the server');
        } else {
            const sortedResults = results.sort((a, b) => a.price - b.price);
            res.status(200).json(sortedResults);
        }
        
    })
});






     

module.exports = router;