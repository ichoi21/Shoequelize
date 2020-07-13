DROP DATABASE IF EXISTS shoequelize_db;
CREATE database shoequelize_db;
USE shoequelize_db;

CREATE TABLE users (
  id INT AUTO_INCREMENT NOT NULL, 
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  username VARCHAR(20),
  password VARCHAR(20),
  PRIMARY KEY (id)
);

CREATE TABLE shoes (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    sku VARCHAR(6),
    brand VARCHAR(20),
    style VARCHAR(30),
    gender VARCHAR(30),
    color VARCHAR(50),
    MSRP DECIMAL(7,2),
    mktValue DECIMAL(7,2),
    img VARCHAR(300),
    PRIMARY KEY (id)
);

SELECT * FROM shoes;