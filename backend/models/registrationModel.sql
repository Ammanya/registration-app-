CREATE TABLE Registration (
  ID INT AUTO_INCREMENT PRIMARY KEY,
  Name VARCHAR(100) NOT NULL,
  Email VARCHAR(100) NOT NULL UNIQUE,
  DateOfBirth DATE NOT NULL,
  CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);