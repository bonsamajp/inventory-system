import sql from "mssql";

// 商品一覧取得
export const getProducts = async () => {
    const query = "SELECT * FROM Products";
    const result = await sql.query(query);
    return result.recordset;
};

// 商品取得（ID指定）
export const getProductById = async (productId: number) => {
    const query = `SELECT * FROM Products WHERE ProductID = ${productId}`;
    const result = await sql.query(query);
    return result.recordset[0];
};

// 商品追加
export const addProduct = async (name: string, description: string, price: number, stockQuantity: number) => {
    const query = `
        INSERT INTO Products (Name, Description, Price, StockQuantity)
        VALUES ('${name}', '${description}', ${price}, ${stockQuantity});
    `;
    await sql.query(query);
};

// 商品更新
export const updateProduct = async (productId: number, name: string, description: string, price: number, stockQuantity: number) => {
    const query = `
        UPDATE Products
        SET Name = '${name}', Description = '${description}', Price = ${price}, StockQuantity = ${stockQuantity}
        WHERE ProductID = ${productId};
    `;
    await sql.query(query);
};

// 商品削除
export const deleteProduct = async (productId: number) => {
    const query = `DELETE FROM Products WHERE ProductID = ${productId}`;
    await sql.query(query);
};