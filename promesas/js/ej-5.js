const promise = new Promise((resolve,reject) => {
    resolve('PROMISE VALUE');
    reject();
});

promise.then(console.log);
console.log('MAIN PROGRAM');