function calculator (n1, n2, op){
    if (op == '+') 
       return n1 + n2;
    else if (op == '-' )
        return n1 - n2;
    else if (op == '*')
        return  n1 * n2;
    else if (op == '/')
        return n1 / n2;
    else if (op == '^')
        return Math.pow(n1,n2);
    else
        return null
}
console.log(calculator(2, 2, '+'));