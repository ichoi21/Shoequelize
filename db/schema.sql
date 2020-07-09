DROP DATABASE IF EXISTS shoes_db;
CREATE database shoes_db;
USE shoes_db;

CREATE users (
  id INT AUTO_INCREMENT NOT NULL, 
  fName VARCHAR(20),
  lName VARCHAR(20),

)

CREATE TABLE shoes (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    sku VARCHAR(6),
    brand VARCHAR(20),
    style VARCHAR(30),
    gender VARCHAR(30),
    oolor VARCHAR(50),
    MSRP DECIMAL(7,2),
    mktValue DECIMAL(7,2),
);

SELECT * FROM shoes;
