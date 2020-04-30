const express = require('express');
const app = express();
let port = process.env.PORT || 3000;

app.use(express.static('public'));

app.listen(port, () => {
    console.log('Server running on port : ' + port);
});