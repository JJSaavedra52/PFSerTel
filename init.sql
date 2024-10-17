
CREATE DATABASE project;
use project;

CREATE TABLE users (
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name varchar(255),
    email varchar(255),
    username varchar(255),
    password varchar(255)
);


INSERT INTO users VALUES(null, "juan", "juan@gmail.com", "juan", "123"),
    (null, "maria", "maria@gmail.com", "maria", "456");

-- Create the products table
CREATE TABLE books (
    code varchar(255) PRIMARY KEY,
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
INSERT INTO products (ref, name, price, description) VALUES
('P001', 'Product 1', 19.99, 'Description for Product 1'),
('P002', 'Product 2', 29.99, 'Description for Product 2');