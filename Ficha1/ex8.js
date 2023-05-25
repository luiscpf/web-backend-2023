function multiplos5 (){
    for( var i=5; i <= 20; i+=5){
        console.log(i)
    }
}

multiplos5();

// Anda de 5 em 5

function multiplos(multiple, limit){
    for (let i = multiple; i < limit; i+=multiple) {
        console.log(i);
    }
}

multiplos(5, 30)

// Anda de 1 em 1 e verifica se o numero é multiplo de 5

function multiplo5(multiple, limit){
    for (let index = 0; index < limit; index++) {
        if (i % multiple == 0) {
            console.log(i)
        }
  
    }
}

multiplo5(5,12)