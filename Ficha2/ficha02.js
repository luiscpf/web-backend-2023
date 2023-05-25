// 1. Escreva uma função que calcule o índice de massa corporal de uma pessoa e imprima a sua condição física. 
// A fórmula contém o peso em kg e a altura em metros


function CalcularIMC (peso, altura){
    var imc = peso/(altura * altura);
    console.log("O seu IMC é: " + imc);

    if (imc < 18.5){
        console.log("Abaixo do Peso Normal");
    }
    else if (18.5 <= imc && imc < 25){
        console.log("No Peso Normal");
    }
    else if (25 <= imc && imc < 30){
        console.log("Acima do Peso Normal");
    }
    else if (imc >= 30){
        console.log("Obeso Vai Fazer Uma Corrida");
    }

}

CalcularIMC(80,2);


//2.1- Inverter texto Vertical

var str = "Hoje é Domingo";
// "ognimoD é ejoH"


function reverseStringVertical(str){
    var splittedStr = str.split(" ");
    
    for (let i = 0; i < splittedStr.length; i++) {
        // console.log(splittedStr[i]);
        var s = splittedStr[i].length;
        // splittedStr[2].lenght - é Domingo e o tamanho de domingo
        for (let j =  splittedStr[i].length -1; j >=0; j--) {
            //  var word = splittedStr[2][0]; word é Domingo com zero é D
            console.log(splittedStr[i][j]);
            // imprime na Vertical
            
        }
        
        
    }
}

reverseStringVertical(str);


//2.2- Inverter texto Horizontal
// "ognimoD é ejoH"

function reverseString(str){
    var splittedStr = str.split(" ");
    var reversedStr = "";

    for (let i = 0; i < splittedStr.length; i++) {    
        for (let j =  splittedStr[i].length -1; j >=0; j--) {
            reversedStr += splittedStr[i][j];
                      
        }
        reversedStr+=" ";               
    }
    return reversedStr;
}

var rev = reverseString(str);
console.log(rev);



/*function countVowels(str){
    var count = 0;
    var vogais = ["a","e","i","o","u"];
    for (var i = 0; i < str.length; i++) {
        for (let j = 0; j < vogais.length; j++) {
            if( str[i] == vogais[j])
            count += 1  
        }   
    }
    return count
}
console.log(countVowels("Hello World")) */


function countChar(str, char){
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if( str[i] == char)
            count++;
            //ou count += 1;  
        }
        return count   
    }
    


countChar("Hello World", "l");

/*08:00:00   9:02:05
he  me  se   hs ms ss*/

function calculateTime (he, me, se, hs, ms, ss){
    var totalTimeSecondsEntry = he * 3600 + me * 60 + se;
    // 1h-3600seg 1m-60seg time in total seconds
    var totalTimeSecondsQuit = hs * 3600 + ms * 60 + ss;
    var total = totalTimeSecondsQuit - totalTimeSecondsEntry;
    // console.log(total); testar total antes de finalizar

    var remainder_h = total % 3600;
    var h = (total - remainder_h) / 3600;

    var remainder_m = remainder_h % 60;
    var m = (remainder_h - remainder_m) / 60;
    var s = (remainder_m);

    console.log("O trabalhador trabalhou: "+ h + "h:"+ m + "m:"+ s + "s");

}

calculateTime(8, 0, 0, 9, 2, 5);

function drawRectangle(char, width, height){
    var line ="";
    for (let i = 0; i < width; i++) {
        line += char;        
    }
    for (let j = 0; j < height; j++) {
        console.log(line);        
    }
}
drawRectangle("*", 10, 10)
drawRectangle("+",5, 15)

function drawTriangule(char, height){
    var line = "";
    for (let i = 0; i < height; i++) {
       line += char;
       console.log(line);
 
    }

}
drawTriangule("-", 6);

// function drawbox(size){
//     var box = ""
//     for (let i = 0; i < size; i++) {
//         for (let j = 0; j < size; j++) {
//             if(i == 0){
//                 box += "*"
//             }
//             else{
//                 box += " "
//             }
            
//         }
//         box += "\n";
        
//     }
//     console.log(box)
// }
// drawbox(10)

// Construa um programa que permita fazer o processamento automático das notas de testes de uma turma
// (máximo de 30 alunos). Crie um objeto que represente um aluno e as suas propriedades, crie vários alunos e
// adicione os mesmos a um Array. O programa deve permitir fazer as seguintes opções: 

//1-O programa imprime todas as notas.

function alunoArray(){
    var person = {name:"Luís", grade: 14 , number: 2025722};
    var person2 = {name:"Milana", grade: 18 , number: 2015722};
    var person3 = {name:"Palmira", grade: 20 , number: 1915722};
    var person4 = {name:"Tino", grade: 13 , number: 1755722};
    var person5 = {name:"Valdemar", grade: 9.3 , number: 1915642};

    var studentList =[];

    studentList.push(person);
    studentList.push(person2);
    studentList.push(person3);
    studentList.push(person4);
    studentList.push(person5);


    for (var i = 0; i < studentList.length; i++) {
        var p = studentList[i];
        var c = p.name;

        console.log("nome: " + p.name + "," + p.number + "," + p.grade)

    

        
    }

}

alunoArray();

//Melhor Aluno - – O programa imprime o número do melhor aluno e a respetiva nota. 

var person = {name:"Luís", grade: 14 , number: 2025722};
var person2 = {name:"Milana", grade: 18 , number: 2015722};
var person3 = {name:"Palmira", grade: 20 , number: 1915722};
var person4 = {name:"Tino", grade: 13 , number: 1755722};
var person5 = {name:"Valdemar", grade: 9.3 , number: 1915642};

var studentList =[];

studentList.push(person);
studentList.push(person2);
studentList.push(person3);
studentList.push(person4);
studentList.push(person5);


function max(array){
    var m = array[0].grade;
    var bestStudent = array[0];
    for (let i = 0; i < array.length; i++) {
        if(array[i].grade > m){
            m = array[i].grade;  
            bestStudent = array[i];
        }
        
    }
    return bestStudent;
}

console.log(max(studentList));

//Pior Aluno - O programa imprime o número do pior aluno e a respetiva nota

function min(array){
    var m = array[0].grade;
    var worstStudent = array[0];
    for (let i = 0; i < array.length; i++) {
        if(array[i].grade < m){
            m = array[i].grade;  
            worstStudent = array[i];
        }
        
    }
    return worstStudent;
}

console.log("Pior Aluno: " + min(studentList));

//Media - O programa imprime o número do aluno que tiver a nota mais próxima da média e a respetiva nota.

function averageGrade(studentList){
    var sum = 0;
    for (let i = 0; i < studentList.length; i++) {
       sum += studentList[i].grade;
        
    }
    var average = sum / studentList.length;
    return average;
}


function closestToAverage(studentList){
    var avg = averageGrade(studentList);
    var min = avg;
    var student = studentList[0];
    for (let i = 0; i < studentList.length; i++) {
        var difer = Math.abs(avg - studentList[i].grade);
        if(difer < min){
            min = difer;
            student = studentList[i];
        }
      
    }
    return student;
}

console.log(closestToAverage(studentList));

//Imprime o número de notas negativas

function negativeList(array){
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        if(array[i].grade < 9.5){
            count ++;
        } 
    }

    return count;
}

function positiveList(array){
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        if(array[i].grade >= 9.5){
            count ++;
        } 
    }

    return count;
}

console.log("Nº de Notas posisitivas" + positiveList(studentList));
console.log("Nº de Notas negativas" + negativeList(studentList));