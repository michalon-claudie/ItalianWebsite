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

CREATE TABLE pictures(
    id INT PRIMARY KEY NOT NULL,
    title VARCHAR(100),
    picture VARCHAR(900)
);

UPDATE pictures SET picture ="https://res.cloudinary.com/du1aihx1l/image/upload/v1726482761/firenze_ctlbe4.jpg" WHERE id="1";