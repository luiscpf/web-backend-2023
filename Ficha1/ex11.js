function minimum(array) {
    var min = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min){
            min = array[i];
        }

    }
    return min;

};
function maximum(array) {
    var max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max){
            max = array[i];
        }

    }
    return max;
};
function medium(array) {
    var med = 0;
    for (let i = 1; i < array.length; i++) {
        med += array[i];

    }
    
    return med / array.length ;
};

    

var array = [2, 3, 4, 6, 1, 0];
var min = minimum(array);
var max = maximum(array);
var med = medium(array);