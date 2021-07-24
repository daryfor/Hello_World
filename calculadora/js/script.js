/*var num1 = 10;
var num2 = 6;

console.log('Suma = ' + (num1 + num2)); //Suma
console.log('Resta = ' + (num1 - num2)); //Resta
console.log('Multiplicacion = ' + (num1 * num2)); //Multiplicacion
console.log('Division = ' + (num1 / num2)); //Division
*/

//CALCULADORA 2.0
var oper = prompt("Introduce operacion (sum, rest, multi, divi)");
var num1 = prompt("Introduce el primer numero");
var num2 = prompt("Introduce el segundo numero");
num1 = parseInt(num1);
num2 = parseInt(num2);
function Suma (num1, num2) {
    return (num1 + num2);
}

function Resta (num1, num2) {
    return (num1 - num2);
}

function Multi (num1, num2) {
    return (num1 * num2);
}

function Divi (num1, num2) {
    return (num1 / num2);
}

switch (oper) {
    case 'sum':
        console.log(Suma(num1, num2));
        break;
    case 'rest':
        console.log(Resta(num1, num2));
        break;
    case 'multi':
        console.log(Multi(num1, num2));
        break;
    case 'divi':
        console.log(Divi(num1, num2));
        break;
    default:
        console.log('Operacion no admitida')
        break;
}