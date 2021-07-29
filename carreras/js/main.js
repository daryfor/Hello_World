/*CLASSES*/

class Circuitos {
    constructor(vueltas, kmVuelta) {
        this.vueltas = vueltas;
        this.kmVuelta = kmVuelta;
    }
}

class Vehiculo {
    constructor(marca,velocidad,gasolina,repostaje,duracion) {
        this.marca = marca;
        this.velocidad  = (Math.random() * (130-100) + 100).toFixed(0); //Permite obtener un nº aleatorio entre 100 y 130
        this.gasolina = "gasoil";
        this.repostaje = repostaje;
        this.duracion = duracion;
    }
}

class Coche extends Vehiculo {
    constructor(marca,velocidad, gasolina,repostaje,duracion,color) {
        super(marca,velocidad,gasolina,repostaje,duracion);
    }
    
}
/*------------------------------------------------*/

/*FUNCTIONS*/

const randomValue = (list) => {
    return list[Math.floor(Math.random() * list.length)];
}

/*------------------------------------------------*/

let cars = document.querySelector('#participantes');

let marcas = ["Mercedes","Ferrari","RedBull","Renault","Alpine","Ford","McLaren","Peugeot"]; //marcas de coches
let repostaje = ["10s","15s","18s","20s","20s"]; //segundos que tarda en repostar
let duracion = ["20","25","30","35","40"]; //vueltas que duran los neumaticos
//let headers = ["Coche","Velocidad media","Combustible","Tiempo en repostar","Desgaste medio neumaticos"];
let headers = ["Coche","Velocidad media","Tiempo en repostar","Desgaste medio neumaticos"];
let participantes = [];

//Creará 10 coches que son los que se agregarán al array de participantes
for(let i=0; i<10;i++) {
    let marca = randomValue(marcas);
    //console.log(marca);
    let repos = randomValue(repostaje);
    //console.log(repos);
    let time = randomValue(duracion);
    //console.log(time);
    let velocidad, gasolina;

    let coche = new Coche(marca,velocidad,gasolina,repos,time);
    //console.log(coche);
    participantes.push(coche);
}

//console.log(partipantes);

let table = document.createElement('table');
let headerRow = document.createElement('tr');

headers.forEach (headerText => {
    let header = document.createElement('th');
    let textNode = document.createTextNode(headerText);

    header.appendChild(textNode);
    headerRow.appendChild(header);
});

table.appendChild(headerRow);
cars.appendChild(table);

participantes.forEach(car => {
    let carNode = document.createElement('tr');
    Object.values(car).forEach(text => {
        if(text != "gasoil") {
            let cell = document.createElement('td');
            let textNode = document.createTextNode(text);

            cell.appendChild(textNode);
            carNode.appendChild(cell);
        }
    });

    table.appendChild(carNode);
});

