function sum(x, callback) {
    return setTimeout(() => {
        return callback(null, x + 5000);
    }, 3000);
}

sum(100, (err, data) => {
    if (err) throw err;

    console.log(data);

});