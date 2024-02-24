-- SELECT STATEMENTS --

-- Select statement for Categories
SELECT category, categoryDescription AS "Description" FROM Categories;

-- Select statement for Characters
SELECT name, characterDescription AS "Description", health, dexterity, defense, attack FROM Characters;

-- Select statement for Items
SELECT name, itemDescription AS "Description", levelRequired AS "Level Required" FROM Items;

-- Select statement for Quests
SELECT questTitle AS "Title", questDescription AS "Description", questLocation AS "Location", questStatus AS "Status", levelRequired AS "Level Required" FROM Quests;

-- Select statement for Skills
SELECT skillName AS "Name", skillDescription AS "Description", skillEffect AS "Effect", levelRequired AS "Level Required" FROM Skills;

-- Select statement for CharacterSkills
SELECT * FROM CharacterSkills;

-- Select statement for ItemCategories
SELECT * FROM ItemCategories;

-- Select statement for QuestRequirements
SELECT * FROM QuestRequirements;

-- Select statement for SkillCategories
SELECT * FROM SkillCategories;

-- Select statement for list of Categories
SELECT category FROM Categories;

-- Select statement  for list of Characters
SELECT name FROM Characters;

-- Select statement for list of Items
SELECT name FROM Items;

-- Select statement for list of Quests
SELECT questTitle FROM Quests;

-- Select statement for list of Skills
SELECT skillName FROM Skills;


-- INSERT STATEMENTS --

-- Insert query for the Categories table; semi-colons indicate variables that
-- the application will insert dynamically.

INSERT INTO Categories 
VALUES (:category, :categoryDescription);

-- Insert query for the Characters table; semi-colons indicate variables that
-- the application will insert dynamically.

INSERT INTO Characters 
VALUES (:name, :characterDescription, :health, :dexterity, :defense, :attack);

-- Insert query for the CharacterSkills table; semi-colons indicate variables that
-- the application will insert dynamically.

INSERT INTO CharacterSkills 
VALUES (:characterID, :skillID);

-- Insert query for the ItemCategories table; semi-colons indicate variables that
-- the application will insert dynamically.

INSERT INTO ItemCategories 
VALUES (:itemID, :categoryID);

-- Insert query for the Items table; semi-colons indicate variables that
-- the application will insert dynamically.

INSERT INTO Items 
VALUES (:name, :itemDescription, :levelRequired);

-- Insert query for the QuestRequirements table; semi-colons indicate variables that
-- the application will insert dynamically.

INSERT INTO QuestRequirements 
VALUES (:questID, :characterID);

-- Insert query for the Quests table; semi-colons indicate variables that
-- the application will insert dynamically.

INSERT INTO Quests 
VALUES (:questTitle, :questDescription, :questLocation, :questStatus, :levelRequired);

-- Insert query for the Skills table; semi-colons indicate variables that
-- the application will insert dynamically.

INSERT INTO Skills 
VALUES (:skillName, :skillDescription, :skillEffect, :levelRequired);

-- Insert query for the CharacterSkills table; semi-colons indicate variables that
-- the application will insert dynamically.

INSERT INTO CharacterSkills 
VALUES (:skillID, :categoryID);

-- UPDATE STATEMENTS --

-- Update query for the Quests table; semi-colons indicate variables that
-- the application will insert dynamically.

UPDATE Quests
SET questTitle = :given_quest_title, questDescription = :given_quest_description,
questLocation = :given_quest_location, questStatus = :given_quest_status, 
levelRequired = :givven_level_required
WHERE questID = :quest_id_to_update;

-- DELETE STATEMENTS --

-- Delete query for the Quests table; semi-colons indicate variables that
-- the application will insert dynamically.

DELETE FROM Quests
WHERE questID = :quest_id_to_delete;