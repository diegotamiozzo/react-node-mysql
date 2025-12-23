-- Create database
CREATE DATABASE IF NOT EXISTS people_db;
USE people_db;

-- Create people table
CREATE TABLE people (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  phone VARCHAR(20),
  email VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Add indexes for better query performance
CREATE INDEX idx_email ON people(email);
CREATE INDEX idx_name ON people(name);
