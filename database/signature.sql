CREATE TABLE IF NOT EXISTS signature (
    firstname TEXT NOT NULL,
    lastname TEXT NOT NULL,
    date DATE NOT NULL,
    email TEXT PRIMARY KEY
);

DELETE FROM signature;

INSERT INTO signature VALUES ('first', 'last', '2024-04-05', 'email@email.com');