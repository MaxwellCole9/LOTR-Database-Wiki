-- Insert query for the Categories table; semi-colons indicate variables that
-- the application will insert dynamically.

INSERT INTO Categories 
VALUES (:category, :categoryDescription);