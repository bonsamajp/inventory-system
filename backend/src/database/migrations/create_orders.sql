CREATE TABLE Orders (
    OrderID INT IDENTITY(1,1) PRIMARY KEY, -- 自動採番
    SupplierID INT FOREIGN KEY REFERENCES Suppliers(SupplierID),
    OrderDate DATETIME DEFAULT GETDATE(),
    Status NVARCHAR(50)
);
