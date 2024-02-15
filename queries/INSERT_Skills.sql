-- Insert query for the Skills table; semi-colons indicate variables that
-- the application will insert dynamically.

INSERT INTO Skills 
VALUES (:skillName, :skillDescription, :skillEffect, :levelRequired);