const express = require("express");
const app = express();
const mysql = require('mysql');
const cors = require("cors");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "crudgames"
});

app.use(cors());
app.use(express.json());

//primeiro param é url, segund é o request e dps resolve
// app.get('/', (req, res) => {
//     //res.send('Hello world!')

//     let SQL = 
//     "INSERT INTO games ( name, cost, category ) VALUES ( 'Far Cry 5', '120', 'Ação' )";

//     db.query(SQL, (err, result) => {
//         //se der erro mostra
//         console.log(err);
//     });
// });

app.post('/register', (req, res) => {
    //const name = req.body.name; mesma coisa
    const { name } = req.body;
    const { cost } = req.body;
    const { category } = req.body;

    //console.log(name); //mostra no terminal

    let SQL = "INSERT INTO games (name, cost, category) VALUES (?, ?, ?)";

    db.query(SQL, [name, cost, category], (err, result) => {
        console.log(err);
    });
});

app.get("/getCards", (req, res) => {
    let SQL = "SELECT * from games";

    db.query(SQL, (err, result) => {
        if (err) console.log(err);
        else res.send(result);
    })
});

app.listen(3001, () => {
    console.log('rodando servidor');
});
