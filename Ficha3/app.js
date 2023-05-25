//log.js

var myLogModule = require('./log.js');

//print1


myLogModule.info('Node.js started');

myLogModule.warning ('Node.js may crash');

//person.js

var person = require ('./person.js');

var person0 = new person('Maria', 'Bacalhau')
var person1 = new person('James', 'Bond');
var person2 = new person('Palmira', 'Pinto');
var person3 = new person('Mimi', 'Linda');
var person4 = new person('Luís', 'Carlos');

//print2

console.log(person0.fullName());
var personList = [person1];
personList.push(person2);
personList.push(person3);
personList.push(person4);

//print3

for (let i = 0; i < personList.length; i++) {
    console.log(personList[i].fullName());
    
}  

//ArrayUtils.js

var arrayUtils = require ('./ArrayUtils');

var array = [];
var empty = arrayUtils.isEmpty(array);

console.log(arrayUtils.isEmpty(array));
console.log(empty);

var array2 = [2, 3, 4, 6, 1, 0];

console.log('Devolve o máximo do array');
console.log(arrayUtils.max(array2));

console.log('Devolve o mínimo do array');
console.log(arrayUtils.min(array2));

console.log('Devolve a media do array');
console.log(arrayUtils.average(array2));

console.log('Devolve o índice de um determinado elemento no array');
console.log(arrayUtils.indexOf(array2, 4));

console.log('Devolve um sub-array do array original');
console.log(arrayUtils.subArray(array2, 0, 3));

var array3 = [2, 3, 4, 6, 1, 0];
var array4 = [1, 2, 3, 4, 8, 9];
var array5 = [1, 12, 23, 84, 38, 19];

console.log('Compara o tamanho de dois arrays');
console.log(arrayUtils.SameLenght(array3, array4));

console.log('Inverte a ordem de um array');
console.log(arrayUtils.reverse(array4));

//A troca com este método é permanente
console.log('Troca dois elementos de um array permanentemente');
console.log(arrayUtils.swapPerm(array4, 3, 4));
console.log(arrayUtils.swapPerm(array5, 0, 2));
console.log(arrayUtils.swapPerm(array5, 3, 4));

console.log('Indica se um determinado valor existe no array');
console.log(arrayUtils.contains(array4, 20));

var array6 = [1, 10, 20, 30, 40, 50];

console.log('Troca dois elementos de um array permanentemente');
console.log(arrayUtils.swap(array6, 0, 1));
console.log(arrayUtils.swap(array6, 1, 5));

var array7 = [80, 90, 2, 100];
var array8 = [2, 3, 7, 6];

console.log('Junta dois arrays num novo');
