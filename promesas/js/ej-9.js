function parsePromised(json) {
    return new Promise((resolve,reject) => {
        try {
            resolve(JSON.parse(json));
        } catch (e) {
            reject(e);
        }
    });
}

function onReject(err) {
    console.log(err.message);
}

parsePromised(process.argv[2])
.then(null,onReject);