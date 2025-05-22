import { Request, Response } from 'express';
import sql from 'mssql';

// 商品一覧取得
export const getProducts = async (req: Request, res: Response) => {
    try {
        const result = await sql.query("SELECT * FROM Products");
        res.json(result.recordset);
    } catch (error) {
        res.status(500).send(error);
    }
};

// 商品取得
export const getProductById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await sql.query(`SELECT * FROM Products WHERE ProductID = ${id}`);
        res.json(result.recordset[0]);
    } catch (error) {
        res.status(500).send(error);
    }
};

// 商品追加
export const addProduct = async (req: Request, res: Response) => {
    try {
        const { name, description, price, stockQuantity } = req.body;
        await sql.query(`
            INSERT INTO Products (Name, Description, Price, StockQuantity)
            VALUES ('${name}', '${description}', ${price}, ${stockQuantity});
        `);
        res.status(201).send("Product added successfully");
    } catch (error) {
        res.status(500).send(error);
    }
};

// 商品更新
export const updateProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { name, description, price, stockQuantity } = req.body;
        await sql.query(`
            UPDATE Products
            SET Name = '${name}', Description = '${description}', Price = ${price}, StockQuantity = ${stockQuantity}
            WHERE ProductID = ${id};
        `);
        res.send("Product updated successfully");
    } catch (error) {
        res.status(500).send(error);
    }
};

// 商品削除
export const deleteProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await sql.query(`DELETE FROM Products WHERE ProductID = ${id}`);
        res.send("Product deleted successfully");
    } catch (error) {
        res.status(500).send(error);
    }
};
