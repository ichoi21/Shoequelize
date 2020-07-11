DROP DATABASE IF EXISTS shoes_db;
CREATE database shoes_db;
USE shoes_db;

CREATE TABLE users (
  id INT AUTO_INCREMENT, 
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  username VARCHAR (30),
  password VARCHAR (30),
  PRIMARY KEY (id)
);

CREATE TABLE shoes (
    id INT AUTO_INCREMENT,
    sku VARCHAR(6),
    brand VARCHAR(50),
    style VARCHAR(50),
    gender VARCHAR(50),
    color VARCHAR(50),
    MSRP DECIMAL(7,2),
    mktValue DECIMAL(7,2),
    img VARCHAR(300),
    PRIMARY KEY (id)
);

SELECT * FROM shoes;