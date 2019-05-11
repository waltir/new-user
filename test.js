var nu = require('./index.js');

nu.getUser((data) => {
    console.log(data);
});

nu.getUsers({nat: 'us,gb', pass: 'upper,18', gender: 'male', results: 3}, (data) => {
    console.log(data);
});