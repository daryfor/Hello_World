var nota = 8;

//Condition IF
/*
if (nota < 5) {
    console.log ('Insuficiente');
} else if (nota >= 5 && nota < 6) {
    console.log ('Suficiente');
} else if (nota >= 6 && nota < 7) {
    console.log ('Bien');
}  else if (nota >= 7 && nota < 9) {
    console.log ('Notable');
}  else if (nota >= 9  && nota <= 10) {
    console.log ('Sobresaliente');
} else {
    console.log ('Nota ilegible')
}*/

//Switch
switch (nota) {
    case 1:
        console.log('Insuficiente');
        break;
    case 2:
            console.log('Insuficiente');
            break;
    case 3:
            console.log('Insuficiente');
            break;
    case 4:
            console.log('Insuficiente');
            break;
    case 5:
            console.log('Suficiente');
            break;
    case 6:
            console.log('Bien');
            break;
    case 7:
            console.log('Notable');
            break;
    case 8:
            console.log('Notable');
            break;                                                           
    case 9:
            console.log('Sobresaliente');
            break;
    case 10:
            console.log('Sobresaliente');
            break; 
    default:
            console.log('Nota ilegible');
        break;
}