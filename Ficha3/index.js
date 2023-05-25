//FICHA3
//Ex3

function started(){
    console.log("Started Download !")

};

function update(progress){
    console.log(progress + "% of Download")

};
function completed(){
    console.log("Completed Download !")

};

function performDownload(fn_s, fn_u, fn_c){
    fn_s();

    for (let i = 0; i <=100 ; i++) {
        fn_u(i);
    }

    fn_c();

}

performDownload(started, update, completed);
