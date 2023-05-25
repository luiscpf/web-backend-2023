var events = {prop: [], test: {}};

//Um objeto é composto por propriedades

//Chamar proriedades de objetos
//Aqui só estou a ir buscar

var x = events.prop;
var z = events.test;

var y = events.foo;

// entre parentises retos nome propriedade
var nameTx = "prop";
var w = events["test"];
var q = events[nameTx];

//Exemplos

eventsx = {
    login: [],
    logout: [],
    ban: []
}

//Aqui estou a criar

eventsx.login = [];
eventsx["logout"] = [];
var n = "ban";
eventsx[n] = [];
eventsx.login.push(2);

console.log(eventsx.login);

var eventsTTTT = {iniciar: [1,2,3], inscrever: ["test", "para", "bd"]}