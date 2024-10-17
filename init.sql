
CREATE DATABASE project;
use project;

CREATE TABLE users (
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username varchar(255) UNIQUE,
    password varchar(255)
);


INSERT INTO users VALUES(null, "juan", "123"),
    (null, "maria", "456");

-- Create the products table
CREATE TABLE books (
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    userid int NOT NULL,
    title varchar(255) NOT NULL,
    author varchar(255) NOT NULL,
    year int NOT NULL,
    synopsis varchar(255) NOT NULL,
    editorial varchar(255) NOT NULL,
    description varchar(255),
    FOREIGN KEY (userid) REFERENCES users(id)
);

-- Insert example products
INSERT INTO books VALUES(null, 1, 'Tiempo de fantasía', 'Alfonso Filadelphia', 2012, 'El protagonista está en un mundo de fantasía', 'Libros del valle', 'Buen libro'),
(null, 2, 'Cuentos para dormir', 'Alex', 2024, 'Varios cuentos con mucho texto', 'Librería del valle' , 'Libro aceptable');