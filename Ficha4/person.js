function person(firstname, lastname) {
    this.firstname = firstname,
    this.lastname  = lastname,
    this.fullname = function(){
        return this.firstname + " " + this.lastname;
    }

}

person.prototype.greet = function(){
    return "Hello" + " " + this.fullname();
}
person.prototype.age = 0;

person.prototype.greetAge = function(){
    return "Hello" + " " + this.fullname() + " " + "a sua idade é " + this.age;
}

//Exportar modulo para app.js

module.exports = person