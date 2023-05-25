//Import express module
const express = require ('express');
const app = express();

//Binds and listenes for connectios on the specific host and port

var server = app.listen(8081, function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port);

});

app.get('/', function(request, response ){
    response.send("Hello World");
});

app.get('/test', function(request, response ){
    response.send("A Milana é Linda e Maravilhosa");
});

//Só passaria se tivesse um user na base de dandos
/*
app.delete('/users/:id', function(request, response ){
    var id = request.params.id;
    response.send("Delete User");
});
*/

