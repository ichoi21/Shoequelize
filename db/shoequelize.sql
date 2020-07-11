DROP DATABASE IF EXISTS shoequelize_db;
CREATE database shoquelize_db;
USE shoequelize_db;

CREATE TABLE users (
  id INT AUTO_INCREMENT NOT NULL, 
  fName VARCHAR(20),
  lName VARCHAR(20)
);

CREATE TABLE shoes (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    sku VARCHAR(6),
    brand VARCHAR(20),
    style VARCHAR(30),
    gender VARCHAR(30),
    color VARCHAR(50),
    MSRP DECIMAL(7,2),
    mktValue DECIMAL(7,2)
);

SELECT * FROM shoes;