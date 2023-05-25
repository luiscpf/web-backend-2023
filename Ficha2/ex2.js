function reverseString(str){
    var splittedStr = str.split(" ")
    var reversedStr = "";
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

var str = "Hoje é Domingo";
// "ognimoD é ejoH"
reverseString(str);


function countVowels(str){
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
console.log(countVowels("Hello World"));

/*function loop(char){
    
    for (let i = 0; i < 3; i++) {
        console.log(i);
        for (let j = 0; j < 2; j++) {
            console.log(j);
            
        }      
    }
}

loop("x");*/

function drawbox(char, width, height){
    var line = ""
    for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
            if(i == 0 || i == width -1 || j==0 || j==height -1 ){
                line += char
            }
            else 
            line 

            
        }
        line += "\n";
        
    }
}
drawbox("*", 5, 6)


