-- Delete query for the Quests table; semi-colons indicate variables that
-- the application will insert dynamically.

DELETE FROM Quests
WHERE questID = :quest_id_to_delete;