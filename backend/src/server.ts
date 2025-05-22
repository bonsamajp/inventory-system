import express from "express";
import dotenv from "dotenv";
import { setupSwagger } from "./config/swagger";
import sql from "mssql";
import productRoutes from "./routes/productRoutes";
import orderRoutes from "./routes/orderRoutes";

dotenv.config();

const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_DATABASE,
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
};

const app = express();
app.use(express.json());

// Swaggerのセットアップ
setupSwagger(app);

// DB 接続
sql.connect(config)
    .then(() => console.log("DB Connected"))
    .catch((err) => console.error("DB Connection Error:", err));

// ルート登録
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

