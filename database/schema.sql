-- Create database
CREATE DATABASE IF NOT EXISTS nome_do_banco;
USE nome_do_banco;

-- Create table
CREATE TABLE nome_da_tabela (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  phone VARCHAR(20),
  email VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Add indexes for better query performance
CREATE INDEX idx_email ON nome_da_tabela(email);
CREATE INDEX idx_name ON nome_da_tabela(name);