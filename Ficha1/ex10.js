//5! = 5*4*3*2*1

function factorial(limit){
    var fact = 1;
    for (let i = 1; i <= limit; i++){
        fact *= i;
    }
    return fact;
        
   
}

console.log(factorial(5))