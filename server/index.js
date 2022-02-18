const express = require("express");
const app = express();
const db = require('mysql');

//primeiro param é url, segund é o request e dps resolve
app.get('/', (req, res) => {
    res.send('Hello world!')
});

app.listen(3001, () => {
    console.log('rodando servidor')
})
