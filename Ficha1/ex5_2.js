function calculateGrade(gp, gt){
    var nota = gp * 0.6 + gt * 0.4;
    if (nota >= 9.5)
        return true;
    else
        return false
}


var approval = calculateGrade(10, 2);
if(approval)
    console.log("APROVADO")
else
    console.log("REPROVADO")

