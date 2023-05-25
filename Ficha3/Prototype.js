
//FUNÇÃO

function Person(firstname){
    this.firstname = firstname;
}

/*
function Person(firstname){
    this.firstname = firstname;
}

function Person(firstname){
    this.benfica = firstname;
}
var p = new Person("David");
p.benfica
*/

//VARIAVEIS A ENVIAR PARA FUNÇÃO
var p = new Person("David");
var p1 = new Person ("Ana");

Person.prototype.greet = function(){
    return "Hello" + this.firstname;
}

//p.greet = function() não retorna nada no console log porque não é função precisamos criar prototype da função

console.log(p.greet());
console.log(p1.greet());

