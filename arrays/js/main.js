function CheckDNI(dni, letraOrig) {
    var letras = 'TRWAGMYFPDXBNJZSQVHLCKET';
    var letraComp = letras[dni % 23];

    if(letraOrig === letraComp) {
        alert('DNI valido');
    } else {
        alert('DNI invalido');
    }
}


var dni = Number(prompt('DNI:'));
var letra = prompt('Introduce letra');


//console.log(dni + ' ' + letra);

CheckDNI(dni, letra);