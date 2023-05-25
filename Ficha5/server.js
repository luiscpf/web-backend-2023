//express é chamar especie de biblio do node
const express = require('express')

//modulo para manipular ficheiros
const fs = require('fs')

//app é construtor
const app = express()

// n porta q vai estar a escuta
const port = 3000

//Middleware que converte Jsnon para body

app.use(express.json());

//Imprime objectos

function readFile(path){
    var content = fs.readFileSync(path);
    //parse transforma em objeto conteudo do ficheiro JSON
    return JSON.parse(content);
}

//Função para guardar ficheiro path caminho data o que quero escrever
function writeFile(path, data){
    fs.writeFileSync(path, data);
}


var content = readFile('./person.json');
console.log(content);
    

// localhost:3000 mostra mensagem
app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.get('/users', (req, res) => {
    res.send(content);
})


app.get('/users/:id', (req, res) => {
    //request parametros nome
    var id = req.params.id;
    var person = content["person" + id];
    //Verifica se existe id
    if(person == undefined){
        res.status(404).send("ID not found");
    }
    else{
        res.send(person);
        
    }


})



//delete.content.person1

app.delete('/users/:id', (req, res) => {
    var id = req.params.id;
    var person = content["person" + id];
    if (person == undefined) {
        // res.send("User não existe"); ^
        res.status(404).send("ID not found");
    }
    else{
        delete content["person" + id];
        writeFile('./person.json', JSON.stringify(content));
        res.send("ID deleted: " + id);   
    }
    
    
})

//Update user

app.put('/users/:id', (req, res) => {
    var id = req.params.id;
    var person = content["person" + id];
    if (person == undefined) {
        // res.send("User não existe"); 
        res.status(404).send("ID not found");
    }
    else{
        content["person" + id] = req.body;
        // primeiro .id é chave do objeto e segundo id o valor
        content["person" + id].id = id;
        writeFile('./person.json', JSON.stringify(content));
        res.send(content["person" + id]);

    }
    
    console.log("PUT");
})
//fazemos delete e dps usamos get para verificar

//Publicar novos users app com mais ids get and post grava memoria se reniniciar elimina
app.post('/users', (req, res) => {
    if(Object.keys(req.body).length == 0){
        res.status(418).send("Details not found");
    }
    else{

        //o que enviar para postman vai aparecer no body lá
        var person = req.body;
        //busca o content de person.json e transforma num array/objeto
        var size = Object.keys(content).length;
        //variavel
        var id = size +1 ;
        //propriedade
        person.id = id;
        //variavel
        content["person" + id] = person;
        writeFile('./person.json', JSON.stringify(content));

        // var keys = Object.keys(content);
        
        res.send( "ID" + id);

    }
   
})

// app.post('/users', (req, res) => {
    
//     res.send(req.body.firstname)
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})