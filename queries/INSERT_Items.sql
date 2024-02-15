-- Insert query for the Items table; semi-colons indicate variables that
-- the application will insert dynamically.

INSERT INTO Items 
VALUES (:name, :itemDescription, :levelRequired);