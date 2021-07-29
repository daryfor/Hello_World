const promise1 = first();
const promise2 = promise1.then((option) => {
    return second(option);
});

promise2.then(console.log);