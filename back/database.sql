CREATE DATABASE IF NOT EXISTS sistema_productos;
USE sistema_productos;

CREATE TABLE productos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  codigo VARCHAR(50) NOT NULL,
  inventario INT NOT NULL,
  marca VARCHAR(100) NOT NULL,
  valor DECIMAL(10,2) NOT NULL,
  estado TINYINT DEFAULT 1,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);