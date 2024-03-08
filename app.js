var express = require('express');
var app = express();
const PORT = 5625;

var db = require('./db-connector');
var bodyParser = require('body-parser');

app.use(express.static('public'));

/*
    Citation for the following function and use of body-parser
    Date: 2/29/2024
    Copied from a medium article on processing post data in node.js
    Source URL: https://medium.com/swlh/read-html-form-data-using-get-and-post-method-in-node-js-8d2c7880adbf
*/
app.use(bodyParser.urlencoded({extended: false}));

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

app.post('/api/addCharacter', function(req, res) {
    let params = req.body
    const query = `INSERT INTO Characters (name, characterDescription, health, dexterity, defense, attack) VALUES ("${params.name}", "${params.characterDescription}", ${params.health}, ${params.dexterity}, ${params.defense}, ${params.attack});`;
    console.log(query);

    db.pool.query(query, function(err, results) {
        if (err) {
            console.error('Error updating quests: ', err);
            res.status(500).send('Error updating quests');
            return;
        }
        res.redirect('/characters.html')
    });
});

app.post('/api/updateCharacter', function(req, res) {
    let params = req.body
    const query = `UPDATE Characters SET name = "${params.name}", characterDescription = "${params.characterDescription}", health = ${params.health}, dexterity = ${params.dexterity}, defense = ${params.defense}, health = ${params.attack} WHERE characterID = ${params.characterID};`;
    console.log(query);

    db.pool.query(query, function(err, results) {
        if (err) {
            console.error('Error updating quests: ', err);
            res.status(500).send('Error updating quests');
            return;
        }
        // res.json(results);
        res.redirect('/characters.html')
    });
});

app.post('/api/deleteCharacter', function(req, res) {
    let params = req.body
    console.log(params);
    const query = `DELETE FROM Characters WHERE characterID = ${params.characterID};`;
    console.log(query);

    db.pool.query(query, function(err, results) {
        if (err) {
            console.error('Error updating quests: ', err);
            res.status(500).send('Error updating quests');
            return;
        }
        // res.json(results);
        res.redirect('/characters.html')
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

app.post('/api/addItem', function(req, res) {
    let params = req.body
    const query = `INSERT INTO Items (name, itemDescription, levelRequired) VALUES ("${params.name}", "${params.itemDescription}", ${params.levelRequired});`;
    console.log(query);

    db.pool.query(query, function(err, results) {
        if (err) {
            console.error('Error updating quests: ', err);
            res.status(500).send('Error updating quests');
            return;
        }
        res.redirect('/items.html')
    });
});

app.post('/api/updateItem', function(req, res) {
    let params = req.body
    const query = `UPDATE Items SET name = "${params.name}", itemDescription = "${params.itemDescription}", levelRequired = ${params.levelRequired} WHERE itemID = ${params.itemID};`;
    console.log(query);

    db.pool.query(query, function(err, results) {
        if (err) {
            console.error('Error updating quests: ', err);
            res.status(500).send('Error updating quests');
            return;
        }
        // res.json(results);
        res.redirect('/items.html')
    });
});

app.post('/api/deleteItem', function(req, res) {
    let params = req.body
    console.log(params);
    const query = `DELETE FROM Items WHERE itemID = ${params.itemID};`;
    console.log(query);

    db.pool.query(query, function(err, results) {
        if (err) {
            console.error('Error updating quests: ', err);
            res.status(500).send('Error updating quests');
            return;
        }
        // res.json(results);
        res.redirect('/items.html')
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

app.post('/api/addQuest', function(req, res) {
    let params = req.body
    const query = `INSERT INTO Quests (questTitle, questDescription, questLocation, questStatus, levelRequired) VALUES ("${params.questTitle}", "${params.questDescription}", "${params.questLocation}", ${params.questStatus}, ${params.levelRequired});`;
    console.log(query);

    db.pool.query(query, function(err, results) {
        if (err) {
            console.error('Error updating quests: ', err);
            res.status(500).send('Error updating quests');
            return;
        }
        res.redirect('/quests.html')
    });
});

app.post('/api/updateQuest', function(req, res) {
    let params = req.body
    const query = `UPDATE Quests SET questTitle = "${params.questTitle}", questDescription = "${params.questDescription}", questLocation = "${params.questLocation}", questStatus = ${params.questStatus}, levelRequired = ${params.levelRequired} WHERE questID = ${params.questID};`;
    console.log(query);

    db.pool.query(query, function(err, results) {
        if (err) {
            console.error('Error updating quests: ', err);
            res.status(500).send('Error updating quests');
            return;
        }
        // res.json(results);
        res.redirect('/quests.html')
    });
});

app.post('/api/deleteQuest', function(req, res) {
    let params = req.body
    console.log(params);
    const query = `DELETE FROM Quests WHERE questID = ${params.questID};`;
    console.log(query);

    db.pool.query(query, function(err, results) {
        if (err) {
            console.error('Error updating quests: ', err);
            res.status(500).send('Error updating quests');
            return;
        }
        // res.json(results);
        res.redirect('/quests.html')
    });
});

app.get('/api/CharacterSkills', function(req, res) {
    const query = 'SELECT * FROM CharacterSkills JOIN Characters ON CharacterSkills.characterID = Characters.characterID JOIN Skills ON CharacterSkills.skillID = Skills.skillID;';

    db.pool.query(query, function(err, results) {
        if (err) {
            console.error('Error fetching characters: ', err);
            res.status(500).send('Error fetching characters');
            return;
        }
        res.json(results);
    });
});

app.get('/api/ItemCategories', function(req, res) {
    const query = 'SELECT * FROM ItemCategories JOIN Items on ItemCategories.itemID = Items.itemID JOIN Categories ON ItemCategories.categoryID = Categories.categoryID;';

    db.pool.query(query, function(err, results) {
        if (err) {
            console.error('Error fetching characters: ', err);
            res.status(500).send('Error fetching characters');
            return;
        }
        res.json(results);
    });
});

app.get('/api/QuestRequirements', function(req, res) {
    const query = 'SELECT * FROM QuestRequirements JOIN Quests ON QuestRequirements.questID = Quests.questID JOIN Characters ON QuestRequirements.characterID = Characters.characterID;';

    db.pool.query(query, function(err, results) {
        if (err) {
            console.error('Error fetching characters: ', err);
            res.status(500).send('Error fetching characters');
            return;
        }
        res.json(results);
    });
});

app.get('/api/SkillCategories', function(req, res) {
    const query = 'SELECT * FROM SkillCategories JOIN Skills on SkillCategories.skillID = Skills.skillID JOIN Categories ON SkillCategories.categoryID = Categories.categoryID;';

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