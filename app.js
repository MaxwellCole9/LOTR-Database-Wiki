var express = require('express');
var app = express();
const PORT = 5625;

var db = require('./db-connector'); // Make sure this module correctly connects to your MySQL database

app.use(express.static('public'));

app.get('/api/Characters', function(req, res) {
    const query = 'SELECT * FROM Characters;'; // Adjust based on your actual table structure

    db.pool.query(query, function(err, results) {
        if (err) {
            console.error('Error fetching characters: ', err);
            res.status(500).send('Error fetching characters');
            return;
        }
        res.json(results);
    });
});

app.listen(PORT, function() {
    console.log('Server started on http://localhost:' + PORT + '; press Ctrl-C to terminate.');
});