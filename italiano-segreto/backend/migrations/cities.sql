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

DROP TABLE articles;

CREATE TABLE cities (
    id INT PRIMARY KEY,
    title VARCHAR(400) NOT NULL,
    pictureBanner VARCHAR(900),
    paragraphe VARCHAR(700),
    secondPicture VARCHAR(900),
    paragraphe2 VARCHAR(700),
    link VARCHAR(255),
    link_word VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
INSERT INTO cities(id,title,pictureBanner,paragraphe,secondPicture,paragraphe2,link,link_word)
VALUES 
('1','Florence','pictureBanner','hello florence','secondpicture','ca va florence','link',"link word"),
('2','Rome','pictureBanner','hello rome','secondpicture','ca va rome','link',"link word")
; 
