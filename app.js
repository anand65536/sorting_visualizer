const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (request, response) => {
});

app.listen(3000, () => {
    console.log('Express Intro running on localhost:3000');
});