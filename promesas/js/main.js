
const edad = 18;
const promise = new Promise((resolve, reject) => {
    if (edad >= 18) {
        resolve('Eres mayor de edad');
    } else {
        reject('Eres menor de edad');
    }
});

promise.then(value=> {
    return value + ' así que puedes entrar';
})
.then(value => {
    console.log(value);
})
.catch(error=> {
    console.log(error);
})
.finally(() =>{
    console.log('siempre entra aquí');
})