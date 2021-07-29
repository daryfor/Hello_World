const promise = new Promise((fulfill, reject) => {
    fulfill('this is approved');
});

var promise1 = Promise.resolve('This has been approved');

const promise2 = new Promise((fulfill, reject) => {
    reject(new Error('this is canceled'));
});

var promise3 = Promise.reject('This has been canceled');


promise.then(console.log);
promise2.then(console.log).catch(err=>console.log(err.message));
console.log(promise1);
console.log(promise3);