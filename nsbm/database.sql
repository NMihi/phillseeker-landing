CREATE DATABASE pharmacy;

USE pharmacy_inventory;

CREATE TABLE medications (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category VARCHAR(50),
    quantity INT NOT NULL,
    cost DECIMAL(10,2) NOT NULL,
    expiration DATE NOT NULL
);

CREATE TABLE pharmacies (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    city VARCHAR(50) NOT NULL,
    state VARCHAR(50) NOT NULL,
    zip_code VARCHAR(10) NOT NULL,
    phone VARCHAR(20) NOT NULL,
);
CREATE TABLE medicine (
  medicine_id INT NOT NULL AUTO_INCREMENT,
  category VARCHAR(50) NOT NULL,
  quantity INT NOT NULL,
  expiration_date DATE NOT NULL,
  pharmacy_id INT NOT NULL,
  PRIMARY KEY (medicine_id),
  FOREIGN KEY (pharmacy_id) REFERENCES pharmacy(pharmacy_id)
);