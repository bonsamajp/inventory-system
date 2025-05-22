CREATE TABLE Products (
    ProductID INT IDENTITY(1,1) PRIMARY KEY, -- 自動採番
    Name NVARCHAR(100),
    Description NVARCHAR(255),
    Price DECIMAL(10,2),
    StockQuantity INT,
    CreatedAt DATETIME DEFAULT GETDATE()
);
