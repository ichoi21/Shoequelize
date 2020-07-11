DROP DATABASE IF EXISTS shoes_db;
CREATE database shoes_db;
USE shoes_db;

CREATE TABLE users (
  id INT AUTO_INCREMENT, 
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  username VARCHAR (30) NOT NULL,
  password VARCHAR (30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE shoes (
    id INT AUTO_INCREMENT,
    year INT NOT NULL,
    brand VARCHAR(20),
    sku VARCHAR(6),
    style VARCHAR(30),
    gender VARCHAR(30),
    color VARCHAR(50),
    msrp DECIMAL(7,2),
    market_value DECIMAL(7,2),
    img VARCHAR(300),
    PRIMARY KEY (id)
);

SELECT * FROM shoes;