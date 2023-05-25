
var objeto = {
    name: "Marco Aurélio", 
    age: 200, 
    gender: "M",


};

//OBJETO PARA jASON 
var objetoJSON = JSON.stringify(objeto);


//imprime objeto
console.log(objeto);
//imprime string
console.log(objetoJSON);

var str = '{"name":"Anita","age":40,"gender":"F"}';

//String para objeto json.parse
var objetoObj = JSON.parse(str);

console.log(objetoObj);

const person = require('../Ficha3/person');

//PERSON.JS

var PersonX= require('./person');

var p = new PersonX("John", "Doe");
var p1 = new PersonX("Jacobina", "Sanzala");

console.log(p.greet());
console.log(p1.greet());

// Alterar Age
p.age = 30;
p1.age = 70;
console.log("Ages:");
console.log(p.age);
console.log(p1.age);

//FUNÇÂO GREET ALTERADA COM IDADE

console.log(p.greetAge());

//Ex h e i
console.log(p.__proto__);
console.log(p1.__proto__);
console.log(p.__proto__ == p1.__proto__);

//Emitter.js

var Emitter = require("./emitter2");
var config = require("./config");

var emitter = new Emitter();
var emitter2 = new Emitter();

emitter.on("Login", function(){
    console.log("LOGIN");
});

emitter2.on(config.events.LOGIN, function(){
    console.log("LOGOUT");
});

emitter.emit("Login");
emitter.emit(config.events.LOGIN);





























// const myEmitter = new Emitter();



// myEmitter.on('evento1', () => {
//     console.log('Listener 1 para o evento 1');
// });
  
// myEmitter.on('evento1', () => {
//     console.log('Listener 2 para o evento 1');
// });

// myEmitter.emit('evento1');

// myEmitter.on('evento2', () => {
//     console.log('Listener 1 para o evento 2');
// });
  
// myEmitter.emit('evento2');



