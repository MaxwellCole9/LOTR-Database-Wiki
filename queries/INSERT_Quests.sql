-- Insert query for the Quests table; semi-colons indicate variables that
-- the application will insert dynamically.

INSERT INTO Quests 
VALUES (:questTitle, :questDescription, :questLocation, :questStatus, :levelRequired);