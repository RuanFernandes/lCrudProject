const express = require('express');
const app = express();
const mysql = require('mysql2');
const cors = require('cors');

app.use(cors()); 
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root123',
    database: 'db01'
});

db.on('connect', () => {
    console.log('Connected to database');
});

app.get('/navbar', (req, res) => {
    db.query('SELECT * FROM menu_nav', (err, rows) => {
        if (err) {
            console.log(err);
            res.status(500).send('Internal server error');
        } else {
            res.json(rows);
        }
    });
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
