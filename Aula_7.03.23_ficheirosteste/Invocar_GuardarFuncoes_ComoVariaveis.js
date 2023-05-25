function foo(){
    console.log("FOO"); 
}

function bar(fn){
    console.log("BAR")
    fn();
}

var x = foo;
bar(x); 
// x = guardar função na variavel bar(invoca função foo) e fn=x

// var x = foo();
// invo


// var x = foo;
// x = guardar função na variavel
// x();
// invocar
