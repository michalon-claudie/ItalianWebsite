CREATE TABLE pages (
    id INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE articles(
    id INT PRIMARY KEY NOT NULL,
    title VARCHAR(100),
    picture VARCHAR(400),
    text VARCHAR(900)
);