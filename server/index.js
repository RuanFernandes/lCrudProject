const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql2');
const cors = require('cors');

app.use(cors());
app.use(bodyParser());

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

app.delete('/navbar', (req, res) => {
    const id = req.body.rowid;

    if (!id) {
        res.status(400).send('Bad request');
        return;
    }

    db.query(`SELECT * FROM menu_nav WHERE id=${id}`, (err, rows) => {
        if (err) {
            console.log(err);
            res.status(500).send('Internal server error');
        } else {
            if (rows[0]['deletable'] === 'S') {
                db.query(`DELETE FROM menu_nav WHERE id=${id}`, (err, rows) => {
                    if (err) {
                        console.log(err);
                        res.status(500).send('Internal server error');
                    } else {
                        res.send('Deleted');
                    }
                });
            } else {
                res.send('Cannot delete this row.');
            }
        }
    });
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
