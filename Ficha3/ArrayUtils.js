//Ex4


module.exports = {
    isEmpty : function(array){
        if(array.length == 0){
            return true;
        }
        else{ 
            return false;
        }
        // Ou sem if e else só return array.lenght == 0
    },
    max: function(array){
        var max = array[0];
        for (let i = 1; i < array.length; i++) {
            if (array[i] > max){
                max = array[i];
            }
    
        }
        return max;

    },
    min: function(array){
        var min = array[0];
        for (let i = 1; i < array.length; i++) {
            if (array[i] < min){
                min = array[i];
            }
    
        }
        return min;

    },
    average: function(array){
        var med = 0;
        var soma = 0;
        for (let i = 1; i < array.length; i++) {
            soma += array[i];

        }
        med = soma / array.length 
        return med;
        
    },
    indexOf: function(array, value){
        var index = -1;
        for (let i = 0; i < array.length; i++) {
            if (array[i]== value){
                index = i;
            }
           
        }
        return index;
    },
    subArray: function (array, startIndex, endIndex){
        var SubArray = [];
        for (let i = startIndex; i < endIndex; i++) {
            SubArray.push(array[i]);   
               
        }
        return SubArray;
    },
    SameLenght: function (array, array2){
        if (array.length == array2.length){
            return true;
        }
        else{
            return false;
        }
    },
    reverse: function (array){
        var arrayReverse = [];
        for (let i = array.length -1 ; i >= 0 ; i--) {
            arrayReverse.push(array[i]);  
        }
        return arrayReverse;

    },
    swapPerm: function (array, index1, index2){
        [array[index1], array[index2]] = [array[index2], array[index1]];
        return array;

    },
    swap: function (array, index1, index2){
        var temporary = array[index1];
        array[index1] = array[index2];
        array[index2] = temporary;

        return array;

    },

    contains: function(array, value){
        return this.indexOf(array, value) != -1;
    },

    concatenate: function(array1, array2){
        for (let i = 0; i < array2.length; i++) {
            array1.push(array2[i]);
            
        }
        return array1;

    }
    

        
};

// contains: function(array, value){
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === value){
//             return true;
//         }
//         else{
//             return false;
//         } 
//     }
// },





