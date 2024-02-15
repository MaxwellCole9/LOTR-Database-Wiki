-- Update query for the Quests table; semi-colons indicate variables that
-- the application will insert dynamically.

UPDATE Quests
SET questTitle = :given_quest_title, questDescription = :given_quest_description,
questLocation = :given_quest_location, questStatus = :given_quest_status, 
levelRequired = :givven_level_required
WHERE questID = :quest_id_to_update;