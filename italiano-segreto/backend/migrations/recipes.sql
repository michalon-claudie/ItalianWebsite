CREATE TABLE recipes(
    id INT PRIMARY KEY,
    title_recipe VARCHAR(255) NOT NULL,
    pictureBannerRecipe VARCHAR(900),
    paragrapheRecipe VARCHAR(700),
    pictureRecipe2 VARCHAR(900),
    paragrapheRecipe2 VARCHAR(700),
    linkRecipe VARCHAR(255),
    link_wordRecipe VARCHAR(100),
    city_id INT,
    FOREIGN KEY (city_id) REFERENCES cities(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);