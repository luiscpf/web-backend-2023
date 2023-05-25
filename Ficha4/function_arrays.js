var array = [];

array.push( value =>{
    console.log("Hello World" + " " + value)
});
array.push(function(value){
    console.log("Hello World" + " " + value)
});
array.push(function(value){
    console.log("Hello World" + " " + value)
});

// array.push(10);
// array.push("Hello");
// //Espaco vazio
// array.push({});

// Devolve Hello World 0,1,2
// for (let i = 0; i < array.length; i++) {
//     array[i](i);
    
// }

// for (let i = 0; i < array.length; i++) {
//     var element = array[i];
//     element(i);
    
// }

//So imprime 1 e 2 por que comeca na posição 1 do array
for (let i = 1; i < array.length; i++) {
    array[i-1](i);
    
        
 }


// Devolve 3 Hello World 1,2,3
var index = 1;
array.forEach(element => {
    element(index);
    index++;
    
});





