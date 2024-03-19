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
app.use(bodyParser.urlencoded({ extended: false }));

/*
    Get Characters from database.
*/
app.get('/api/Characters', function (req, res) {
    const query = 'SELECT * FROM Characters;';

    db.pool.query(query, function (err, results) {
        if (err) {
            console.error('Error fetching characters: ', err);
            res.status(500).send('Error fetching characters');
            return;
        }
        res.json(results);
    });
});

/*
    Add Character to database.
*/
app.post('/api/addCharacter', function (req, res) {
    let params = req.body
    const query = `INSERT INTO Characters (name, characterDescription, health, dexterity, defense, attack) VALUES ("${params.name}", "${params.characterDescription}", ${params.health}, ${params.dexterity}, ${params.defense}, ${params.attack});`;

    db.pool.query(query, function (err, results) {
        if (err) {
            console.error('Error updating quests: ', err);
            res.status(500).send('Error updating quests');
        }
        res.redirect('/characters.html')
    });
});

/*
    Update Character in database.
*/
app.post('/api/updateCharacter', function (req, res) {
    let params = req.body
    const query = `UPDATE Characters SET name = "${params.name}", characterDescription = "${params.characterDescription}", health = ${params.health}, dexterity = ${params.dexterity}, defense = ${params.defense}, health = ${params.attack} WHERE characterID = ${params.characterID};`;

    db.pool.query(query, function (err, results) {
        if (err) {
            console.error('Error updating quests: ', err);
            res.status(500).send('Error updating quests');
        }
        res.redirect('/characters.html')
    });
});

/*
    Delete Character in database.
*/
app.post('/api/deleteCharacter', function (req, res) {
    let params = req.body;
    const query = `DELETE FROM Characters WHERE characterID = ${params.characterID};`;

    db.pool.query(query, function (err, results) {
        if (err) {
            console.error('Error updating quests: ', err);
            res.status(500).send('Error updating quests');
        }
        res.redirect('/characters.html')
    });
});

/*
    Get Skills from database.
*/
app.get('/api/Skills', function (req, res) {
    const query = 'SELECT * FROM Skills;';

    db.pool.query(query, function (err, results) {
        if (err) {
            console.error('Error fetching skills: ', err);
            res.status(500).send('Error fetching skills');
            return;
        }
        res.json(results);
    });
});

/*
    Add Skill to database.
*/
app.post('/api/addSkill', function (req, res) {
    let params = req.body
    const query = `INSERT INTO Skills (skillName, skillDescription, skillEffect, levelRequired) VALUES ("${params.skillName}", "${params.skillDescription}", "${params.skillEffect}", ${params.levelRequired});`;

    db.pool.query(query, function (err, results) {
        if (err) {
            console.error('Error updating skills: ', err);
            res.status(500).send('Error updating skills');
        }
        res.redirect('/skills.html')
    });
});

/*
    Update Skill in database.
*/
app.post('/api/updateSkill', function (req, res) {
    let params = req.body
    const query = `UPDATE Skills SET skillName = "${params.skillName}", skillDescription = "${params.skillDescription}", skillEffect = "${params.skillEffect}", levelRequired = ${params.levelRequired};`;

    db.pool.query(query, function (err, results) {
        if (err) {
            console.error('Error updating skills: ', err);
            res.status(500).send('Error updating skills');
        }
        res.redirect('/skills.html')
    });
});

/*
    Delete Skill in database.
*/
app.post('/api/deleteSkill', function (req, res) {
    let params = req.body
    const query = `DELETE FROM Skills WHERE skillID = ${params.skillID};`;

    db.pool.query(query, function (err, results) {
        if (err) {
            console.error('Error updating skills: ', err);
            res.status(500).send('Error updating skills');
        }
        res.redirect('/skills.html')
    });
});

/*
    Get Items from database.
*/
app.get('/api/Items', function (req, res) {
    const query = 'SELECT * FROM Items;';

    db.pool.query(query, function (err, results) {
        if (err) {
            console.error('Error fetching items: ', err);
            res.status(500).send('Error fetching items');
            return;
        }
        res.json(results);
    });
});

/*
    Add Item to database.
*/
app.post('/api/addItem', function (req, res) {
    let params = req.body
    const query = `INSERT INTO Items (name, itemDescription, levelRequired) VALUES ("${params.name}", "${params.itemDescription}", ${params.levelRequired});`;

    db.pool.query(query, function (err, results) {
        if (err) {
            console.error('Error updating quests: ', err);
            res.status(500).send('Error updating quests');
        }
        res.redirect('/items.html')
    });
});

/*
    Update Item in database.
*/
app.post('/api/updateItem', function (req, res) {
    let params = req.body
    const query = `UPDATE Items SET name = "${params.name}", itemDescription = "${params.itemDescription}", levelRequired = ${params.levelRequired} WHERE itemID = ${params.itemID};`;

    db.pool.query(query, function (err, results) {
        if (err) {
            console.error('Error updating quests: ', err);
            res.status(500).send('Error updating quests');
        }
        res.redirect('/items.html')
    });
});

/*
    Delete Item in database.
*/
app.post('/api/deleteItem', function (req, res) {
    let params = req.body
    const query = `DELETE FROM Items WHERE itemID = ${params.itemID};`;

    db.pool.query(query, function (err, results) {
        if (err) {
            console.error('Error updating quests: ', err);
            res.status(500).send('Error updating quests');
        }
        res.redirect('/items.html')
    });
});

/*
    Get Categories from database.
*/
app.get('/api/Categories', function (req, res) {
    const query = 'SELECT * FROM Categories;';

    db.pool.query(query, function (err, results) {
        if (err) {
            console.error('Error fetching categories: ', err);
            res.status(500).send('Error fetching categories');
            return;
        }
        res.json(results);
    });
});

/*
    Add Category to database.
*/
app.post('/api/addCategory', function (req, res) {
    let params = req.body;
    const query = `INSERT INTO Categories (category, categoryDescription) VALUES ("${params.category}", "${params.categoryDescription}");`;

    db.pool.query(query, function (err, results) {
        if (err) {
            console.error('Error adding category: ', err);
            res.status(500).send('Error adding category');;
        }
        res.redirect('/categories.html');
    });
});

/*
    Update Category in database.
*/
app.post('/api/updateCategory', function (req, res) {
    let params = req.body;
    const query = `UPDATE Categories SET category = "${params.category}", categoryDescription = "${params.categoryDescription}" WHERE categoryID = ${params.categoryID};`;

    db.pool.query(query, function (err, results) {
        if (err) {
            console.error('Error updating category: ', err);
            res.status(500).send('Error updating category');
        }
        res.redirect('/categories.html');
    });
});

/*
    Delete Category in database.
*/
app.post('/api/deleteCategory', function (req, res) {
    let params = req.body;
    const query = `DELETE FROM Categories WHERE categoryID = ${params.categoryID};`;

    db.pool.query(query, function (err, results) {
        if (err) {
            console.error('Error deleting category: ', err);
            res.status(500).send('Error deleting category');
        }
        res.redirect('/categories.html');
    });
});

/*
    Get Quests from database.
*/
app.get('/api/Quests', function (req, res) {
    const query = 'SELECT * FROM Quests;';

    db.pool.query(query, function (err, results) {
        if (err) {
            console.error('Error fetching quests: ', err);
            res.status(500).send('Error fetching quests');
            return;
        }
        res.json(results);
    });
});

/*
    Add Quest to database.
*/
app.post('/api/addQuest', function (req, res) {
    let params = req.body
    const query = `INSERT INTO Quests (questTitle, questDescription, questLocation, questStatus, levelRequired) VALUES ("${params.questTitle}", "${params.questDescription}", "${params.questLocation}", ${params.questStatus}, ${params.levelRequired});`;

    db.pool.query(query, function (err, results) {
        if (err) {
            console.error('Error updating quests: ', err);
            res.status(500).send('Error updating quests');
        }
        res.redirect('/quests.html')
    });
});

/*
    Update Quest in database.
*/
app.post('/api/updateQuest', function (req, res) {
    let params = req.body
    const query = `UPDATE Quests SET questTitle = "${params.questTitle}", questDescription = "${params.questDescription}", questLocation = "${params.questLocation}", questStatus = ${params.questStatus}, levelRequired = ${params.levelRequired} WHERE questID = ${params.questID};`;

    db.pool.query(query, function (err, results) {
        if (err) {
            console.error('Error updating quests: ', err);
            res.status(500).send('Error updating quests');
        }
        res.redirect('/quests.html')
    });
});

/*
    Delete Quest in database.
*/
app.post('/api/deleteQuest', function (req, res) {
    let params = req.body;
    const query = `DELETE FROM Quests WHERE questID = ${params.questID};`;

    db.pool.query(query, function (err, results) {
        if (err) {
            console.error('Error updating quests: ', err);
            res.status(500).send('Error updating quests');
        }
        res.redirect('/quests.html')
    });
});

/*
    Get CharacterSkills from database.
*/
app.get('/api/CharacterSkills', function (req, res) {
    const query = 'SELECT * FROM CharacterSkills JOIN Characters ON CharacterSkills.characterID = Characters.characterID JOIN Skills ON CharacterSkills.skillID = Skills.skillID;';

    db.pool.query(query, function (err, results) {
        if (err) {
            console.error('Error fetching characters: ', err);
            res.status(500).send('Error fetching characters');
            return;
        }
        res.json(results);
    });
});

/*
    Add CharacterSkill to database.
*/
app.post('/api/addCharacterSkill', function (req, res) {
    let params = req.body;
    const query = `INSERT INTO CharacterSkills (characterID, skillID) VALUES (${params.characterID}, ${params.skillID});`;

    db.pool.query(query, function (err, results) {
        if (err) {

            // If entry is duplicate, refresh the page
            if (err.sqlMessage.startsWith("Duplicate")) {
                res.redirect('/characterSkills.html');
                return;
            }

            console.error('Error fetching characters: ', err);
            res.status(500).send('Error fetching characters');
        }
        res.redirect('/characterSkills.html');
    });
});

/*
    Delete CharacterSkill in database.
*/
app.post('/api/deleteCharacterSkill', function (req, res) {
    let params = req.body;
    let paramIds = params.characterID_skillID.split("_");
    let characterID = Number(paramIds[0]);
    let skillID = Number(paramIds[1]);
    const query = `DELETE FROM CharacterSkills WHERE characterID = ${characterID} AND skillID = ${skillID};`;

    db.pool.query(query, function (err, results) {
        if (err) {
            console.error('Error fetching characters: ', err);
            res.status(500).send('Error fetching characters');
        }
        res.redirect('/characterSkills.html');
    });
});

/*
    Get ItemCategories from database.
*/
app.get('/api/ItemCategories', function (req, res) {
    const query = 'SELECT * FROM ItemCategories JOIN Items on ItemCategories.itemID = Items.itemID JOIN Categories ON ItemCategories.categoryID = Categories.categoryID;';

    db.pool.query(query, function (err, results) {
        if (err) {
            console.error('Error fetching characters: ', err);
            res.status(500).send('Error fetching characters');
            return;
        }
        res.json(results);
    });
});

/*
    Add ItemCategory to database.
*/
app.post('/api/addItemCategory', function (req, res) {
    let params = req.body;
    const query = `INSERT INTO ItemCategories (itemID, categoryID) VALUES (${params.itemID}, ${params.categoryID});`;

    db.pool.query(query, function (err, results) {
        if (err) {

            // If entry is duplicate, refresh the page
            if (err.sqlMessage.startsWith("Duplicate")) {
                res.redirect('/itemCategories.html');
                return;
            }

            console.error('Error fetching characters: ', err);
            res.status(500).send('Error fetching characters');
        }
        res.redirect('/itemCategories.html');
    });
});

/*
    Delete ItemCategory in database.
*/
app.post('/api/deleteItemCategory', function (req, res) {
    let params = req.body;
    let paramIds = params.itemID_categoryID.split("_");
    let itemID = Number(paramIds[0]);
    let categoryID = Number(paramIds[1]);
    const query = `DELETE FROM ItemCategories WHERE itemID = ${itemID} AND categoryID = ${categoryID};`;

    db.pool.query(query, function (err, results) {
        if (err) {
            console.error('Error fetching characters: ', err);
            res.status(500).send('Error fetching characters');
        }
        res.redirect('/itemCategories.html');
    });
});

/*
    Get QuestRequirements from database.
*/
app.get('/api/QuestRequirements', function (req, res) {
    const query = 'SELECT * FROM QuestRequirements JOIN Quests ON QuestRequirements.questID = Quests.questID JOIN Characters ON QuestRequirements.characterID = Characters.characterID;';

    db.pool.query(query, function (err, results) {
        if (err) {
            console.error('Error fetching characters: ', err);
            res.status(500).send('Error fetching characters');
            return;
        }
        res.json(results);
    });
});

/*
    Add QuestRequirement to database.
*/
app.post('/api/addQuestRequirement', function (req, res) {
    let params = req.body;
    const query = `INSERT INTO QuestRequirements (questID, characterID) VALUES (${params.questID}, ${params.characterID});`;

    db.pool.query(query, function (err, results) {
        if (err) {

            // If entry is duplicate, refresh the page
            if (err.sqlMessage.startsWith("Duplicate")) {
                res.redirect('/questRequirements.html');
                return;
            }

            console.error('Error fetching characters: ', err);
            res.status(500).send('Error fetching characters');
        }
        res.redirect('/questRequirements.html');
    });
});

/*
    Delete QuestRequirement in database.
*/
app.post('/api/deleteQuestRequirement', function (req, res) {
    let params = req.body;
    let paramIds = params.questID_characterID.split("_");
    let questID = Number(paramIds[0]);
    let characterID = Number(paramIds[1]);
    const query = `DELETE FROM QuestRequirements WHERE questID = ${questID} AND characterID = ${characterID};`;

    db.pool.query(query, function (err, results) {
        if (err) {
            console.error('Error fetching characters: ', err);
            res.status(500).send('Error fetching characters');
        }
        res.redirect('/questRequirements.html');
    });
});

/*
    Get SkillCategories from database.
*/
app.get('/api/SkillCategories', function (req, res) {
    const query = 'SELECT * FROM SkillCategories JOIN Skills on SkillCategories.skillID = Skills.skillID JOIN Categories ON SkillCategories.categoryID = Categories.categoryID;';

    db.pool.query(query, function (err, results) {
        if (err) {
            console.error('Error fetching characters: ', err);
            res.status(500).send('Error fetching characters');
            return;
        }
        res.json(results);
    });
});

/*
    Add SkillCategory to database.
*/
app.post('/api/addSkillCategory', function (req, res) {
    let params = req.body;
    const query = `INSERT INTO SkillCategories (skillID, categoryID) VALUES (${params.skillID}, ${params.categoryID});`;

    db.pool.query(query, function (err, results) {
        if (err) {

            // If entry is duplicate, refresh the page
            if (err.sqlMessage.startsWith("Duplicate")) {
                res.redirect('/skillCategories.html');
                return;
            }

            console.error('Error fetching characters: ', err);
            res.status(500).send('Error fetching characters');
        }
        res.redirect('/skillCategories.html');
    });
});

/*
    Delete SkillCategory in database.
*/
app.post('/api/deleteSkillCategory', function (req, res) {
    let params = req.body;
    let paramIds = params.skillID_categoryID.split("_");
    let skillID = Number(paramIds[0]);
    let categoryID = Number(paramIds[1]);
    const query = `DELETE FROM SkillCategories WHERE skillID = ${skillID} AND categoryID = ${categoryID};`;

    db.pool.query(query, function (err, results) {
        if (err) {
            console.error('Error fetching characters: ', err);
            res.status(500).send('Error fetching characters');
        }
        res.redirect('/skillCategories.html');
    });
});

// Start listing for application
app.listen(PORT, function () {
    console.log('Server started on http://localhost:' + PORT + '; press Ctrl-C to terminate.');
});