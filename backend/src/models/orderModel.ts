import sql from "mssql";

// 発注一覧取得
export const getOrders = async () => {
    const query = "SELECT * FROM Orders";
    const result = await sql.query(query);
    return result.recordset;
};

// 発注取得（ID指定）
export const getOrderById = async (orderId: number) => {
    const query = `SELECT * FROM Orders WHERE OrderID = ${orderId}`;
    const result = await sql.query(query);
    return result.recordset[0];
};

// 発注追加
export const addOrder = async (supplierId: number, status: string) => {
    const query = `
        INSERT INTO Orders (SupplierID, OrderDate, Status)
        VALUES (${supplierId}, GETDATE(), '${status}');
    `;
    await sql.query(query);
};

// 発注更新
export const updateOrder = async (orderId: number, status: string) => {
    const query = `
        UPDATE Orders
        SET Status = '${status}'
        WHERE OrderID = ${orderId};
    `;
    await sql.query(query);
};

// 発注削除
export const deleteOrder = async (orderId: number) => {
    const query = `DELETE FROM Orders WHERE OrderID = ${orderId}`;
    await sql.query(query);
};
