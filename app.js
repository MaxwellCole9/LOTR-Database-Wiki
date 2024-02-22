var express = require('express');
var app = express();
const PORT = 5625;

var db = require('./db-connector');

app.use(express.static('public'));

app.get('/api/Characters', function(req, res) {
    const query = 'SELECT * FROM Characters;';

    db.pool.query(query, function(err, results) {
        if (err) {
            console.error('Error fetching characters: ', err);
            res.status(500).send('Error fetching characters');
            return;
        }
        res.json(results);
    });
});

app.get('/api/Skills', function(req, res) {
    const query = 'SELECT * FROM Skills;';

    db.pool.query(query, function(err, results) {
        if (err) {
            console.error('Error fetching skills: ', err);
            res.status(500).send('Error fetching skills');
            return;
        }
        res.json(results);
    });
});

app.get('/api/Items', function(req, res) {
    const query = 'SELECT * FROM Items;';

    db.pool.query(query, function(err, results) {
        if (err) {
            console.error('Error fetching items: ', err);
            res.status(500).send('Error fetching items');
            return;
        }
        res.json(results);
    });
});

app.get('/api/Categories', function(req, res) {
    const query = 'SELECT * FROM Categories;';

    db.pool.query(query, function(err, results) {
        if (err) {
            console.error('Error fetching categories: ', err);
            res.status(500).send('Error fetching categories');
            return;
        }
        res.json(results);
    });
});

app.get('/api/Quests', function(req, res) {
    const query = 'SELECT * FROM Quests;';

    db.pool.query(query, function(err, results) {
        if (err) {
            console.error('Error fetching quests: ', err);
            res.status(500).send('Error fetching quests');
            return;
        }
        res.json(results);
    });
});

app.listen(PORT, function() {
    console.log('Server started on http://localhost:' + PORT + '; press Ctrl-C to terminate.');
});