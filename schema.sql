/*

To run this file, we do the following in our Terminal:

1. Go to the directory of this sql file.

2. Get into our mysql console.

3. Run "source schema.sql"

*/

-- Drops the wishes_db if it already exists --
DROP DATABASE IF EXISTS location_DB;

-- Create the database wishes_db and specified it for use.
CREATE DATABASE location_DB;

USE location_DB;

-- Create the table wishes.
CREATE TABLE locations (
  id int NOT NULL AUTO_INCREMENT,
  longitude DECIMAL(9, 6) NOT NULL,
  latitude DECIMAL(9, 6) NOT NULL,
  street VARCHAR(255) NOT NULL,
  city VARCHAR(255) NOT NULL,
  state VARCHAR(255) NOT NULL,
  zipcode VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

-- Insert a set of records.
INSERT INTO locations (longitude, latitude, street, city, state, zipcode) VALUES (-97.852884, 30.232246, "6301 Steer Trl", "Austin", "TX", "78749-1273");

select * from locations

