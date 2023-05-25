function sumOf(limit){
    var sum = 0;
    for (let i = 1; i < limit; i++) {
        sum += i;
        
    }
    return sum
}
console.log(sumOf(140))