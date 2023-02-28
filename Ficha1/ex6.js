function getMonthName (monthNumber){
    var months = ["Janeiro", "Feveiro"];
    if(monthNumber > 0 && monthNumber <=12)
        console.log(months[monthNumber - 1]); 
        // -1 para a posição 1 representar Janeiro sem -1 Janeiro seria Mes 0/
}