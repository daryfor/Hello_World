
/**
 * KATA JS-ES6.
 * Calculo Area y Perimetro de un circulo.
 * El radio vendrá dado por el usuario.
 */
/*
//variables radio y pi
let radio = prompt("Radio del circulo");
const pi = 3.1416;

//calculo el perimetro
let perimetro = 2 * pi * radio;

//Calculo el area
let area =  
pi * (radio **2);

console.log("Perimetro = ", perimetro.toFixed(2));
console.log("Area = ", area.toFixed(2));
*/

/**
 * KATA JS-ES6. ARROW FUNCTIONS.
 * Contador de caracteres de un String.
 */
/*
//Funcion contador
let contador = string => {
    return string.split('').reduce((total,letter) => {
        total[letter] ? total[letter]++ : total[letter] = 1;
        return total;
    }, {});
};

//Variable con el resultado
let resultado = contador("Hola holita");

console.log(resultado);
*/

/**
 * RETO: ARROW FUNCTIONS
 * Programa que cuente letras y palabras
 * No sensible a mayusculas, acentos y no cuente espacios
 */
/*
let checkString = string => {
    return string.split('').reduce((total,letter) => {
        let vowel = "áéíóú";
        let accentVowel = {
            "á" : "a",
            "é" : "e",
            "í" : "i",
            "ó" : "o",
            "ú" : "u"
        };
        if(letter) {
            letter = letter.toLowerCase();

            if (vowel.includes(letter)) {
                letter = accentVowel[letter];
                console.log(letter);
            }
        }        
        
        if(total[letter]) {
            total[letter]++;
        } else {
            if(letter != " "){
                total[letter] = 1;
            }
        }

        return total;
    },{});
}

let numberChar = string => {
    let total = 0;
    let letras = string.split('');

    for(let letra of letras.values()) {
        if(letra != " ") {
            total++;
        } 
    }

    return total;
}

let numberWords = string => {
    let total = 0;
    let words = string.split(' ');
    
    return words.length;
}


let frase = prompt("Introduce una frase");
let resultado = checkString(frase);
let contadorP = numberChar(frase);
let contadorW = numberWords(frase);

console.log(resultado);
console.log("Numero de letras: ", contadorP);
console.log("Numero de palabras: ", contadorW);
*/

/**
 * RETO - ES6. PARAMETROS POR DEFECTO.
 * Introduce un nombre, coge sus dos primeras letras y ponlas en mayúsculas.
 * Genera un código con esas dos primeras letras y con la posicion que ocupen en el abecedario
 * Ejemplo: Manuel -> MA141 (M->14; A->1)
 */
/*
let iniNombre = string => {
    let nom = string.split('');
    let codName;
    codName = nom[0].toUpperCase() + nom[1].toUpperCase();

    console.log(codName);

    return codName;
}

let positionLetter = string => {
    let abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    abc = abc.split('');
    console.log(abc);
    let codName = string.split('');
    console.log(codName);
    let codNumber="";
    let final;

    for(let i=0; i<codName.length; i++) {
        //console.log(abc.indexOf(codName[i])+1);
        let pos = abc.indexOf(codName[i])+1;
        codNumber = codNumber + '' + pos;

        console.log(codNumber);
    }

    return codNumber;

}

let nombre = prompt("Introduce un nombre:");
let codigoN = iniNombre(nombre);
let position = positionLetter(codigoN);

console.log(codigoN + '' + position);
*/

/**
 * RETO -ES6. Spread.
 * Introduce una cadena y pásalo a mayúsculas utilizando exclusivamente ASCII.
 */
/*
let spread = (nombre) => {
    let arr = [];

    for(let i=0; i<nombre.length; i++) {
        if(nombre[i].charCodeAt(0) >=97 && nombre[i].charCodeAt(0)<=241) {
            arr.push(nombre[i].charCodeAt(0)-32);
            arr[i] = String.fromCharCode(arr[i]);
        } else {
            console.log(nombre[i].charCodeAt(0))
            arr.push(nombre[i].charCodeAt(0));
            arr[i] = String.fromCharCode(arr[i]);
        }
    }

    return arr;
}

let nombre = prompt("Introduce una cadena");

let resultado = spread([...nombre]);
console.log(resultado);
*/

/**
 * KATA - ES6. SCRIPTS LITERALES.
 * Introduce tu nombre y un numero.
 * Confirmar si el número es primo o no.
 * Mostrar por consola el nombre y una frase diciendo si el nº es primo o no
 */
/*
const esPrimo = num => {
    for(let i=2; i< num; i++) {
        if(num % i === 0) return false;
    }
    return num > 1;
}

let nombre = prompt("Introduce tu nombre");
let num = prompt("Dime un número");

if(!esPrimo(num)) {
    console.log(`Hola ${nombre}, el numero ${num} introducido no es primo`);
} else {
    console.log(`Hola ${nombre}, el numero ${num} introducido es primo`);
}
*/

/**
 * RETO - ES6. SCRIPTS LITERALES
 * Utilizamos el código anterior y le aplicamos estilos dependiendo si es primo o no.
 * Se aplica al HTML el style.css
 */
/*
 const esPrimo = num => {
    for(let i=2; i< num; i++) {
        if(num % i === 0) return false;
    }
    return num > 1;
}

let nombre = prompt("Introduce tu nombre");
let num = prompt("Dime un número");

if(!esPrimo(num)) {
    document.write("<p>Hola " + nombre + ", el numero introducido es el:</p><p id='noprimo'>" + num + "... PERO NO ES PRIMO</p>");
    //document.write("<p id='primo'>" + numero + "</p>");
    //documento.write("<p>Y ES PRIMO!!</p>");
    //console.log(`Hola ${nombre}, el numero ${num} introducido no es primo`);
} else {
    document.write("<p>Hola " + nombre + ", el numero introducido es el:</p><p id='primo'>" + num + "... Y ES PRIMO!!</p>");
    //document.write("<p id='noprimo'>" + numero + "</p>");
    //documento.write("<p>PERO NO ES PRIMO</p>");
    //console.log(`Hola ${nombre}, el numero ${num} introducido es primo`);
}
*/

/**
 * KATA - ES6. POO
 * Crear una clase Coche con las caracteristicas:
 *  - Nombre
 *  - Marca
 *  - Velocidad
 *  - Acelerar(). Aumentará la velocidad en 30
 *  - Frenar(). Disminuirá la velocidad a 0
 */
/*
class Coche {
    constructor(name,brand,speed) {
        console.log("Coche instanciado!!");
        this.name = name;
        this.brand = brand;
        this.speed = speed;
    }

    acelerar() {
        return this.speed + 30;
    }

    frenar() {
        return this.speed = 0;
    }
}

let cMarca = prompt("Marca que quieres comprar");
let cModelo = prompt("Que modelo");
let cSpeed = Number(prompt("Velocidad a la que quieres ir"));

let car = new Coche(cModelo,cMarca, cSpeed);

console.log(car);

document.write("<p>El coche comprado es " + car.brand + " " + car.name + "</p>");

let velocidad = car.acelerar();

document.write("<p>La velocidad a la que puede ir es " + car.speed + " pero si acelera puede ir a " + velocidad + "</p>");

document.write("<p>A la hora de frenar, el coche pasaría a " + car.frenar() + "</p>");
*/

/**
 * KATA -ES6. HERENCIA.
 * Crea un objeto vehículo. Aprovecha la herencia para crear:
 *  - Coche
 *  - Moto
 *  - Patín
 *  - Bicicleta
 * 
 * Características:
 *  - Marca
 *  - Matricula
 *  - Nº Ruedas
 *  - Nº Puertas
 *  - Años
 *  - Velocidad
 *  - Correr(). Velocidad incrementada en 10
 *  - Frenar(). Velocidad es 0
 *  - Aparcar(). console.log('Aparcado')
 */

class Vehiculo {
    constructor(marca,matricula,ruedas,puertas,years,speed) {
        this.marca = marca;
        this.matricula = matricula;
        this.ruedas = ruedas;
        this.puertas = puertas;
        this.years = years;
        this.speed = speed;
    }

    correr() {
        return this.speed + 10;
    }

    frenar() {
        return this.spee = 0;
    }

    aparcar() {
        return console.log("Aparcado!");
    }
}

class Coche extends Vehiculo {
    constructor(marca,matricula,ruedas,puertas,years) {
        super(marca,matricula,ruedas,puertas,years);
        this.consumo = "Diesel";
    }
}

class Moto extends Vehiculo {
    constructor(marca,matricula,ruedas,years) {
        super(marca,matricula,ruedas,years);
    }
}

class Patin extends Vehiculo {
    constructor(marca,ruedas,years) {
        super(marca,ruedas,years);
    }
}

class Bicicleta extends Vehiculo {
    constructor(marca, ruedas,years) {
        super(marca,ruedas,years);
    }
}