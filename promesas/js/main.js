const promise = new Promise((resolve, reject) => {
    resolve('resuelta');
});

promise.then(value=> {
    console.log(value);
});