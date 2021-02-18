const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello duy anh');

});

app.get('/login', (req, res) => {
    res.send('login page');

});

app.listen(3000);