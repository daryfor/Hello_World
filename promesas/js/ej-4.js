var promise = new Promise((resolve,reject) => {
    resolve('I FIRED');
    reject(new Error('I DID NOT FIRE'));
});

function onRejected(error) {
    return console.log(error.message);
}

promise.then(console.log,onRejected);