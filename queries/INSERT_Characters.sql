-- Insert query for the Characters table; semi-colons indicate variables that
-- the application will insert dynamically.

INSERT INTO Characters 
VALUES (:name, :characterDescription, :health, :dexterity, :defense, :attack);