import sql from 'mssql';
import dotenv from 'dotenv';

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

export const connectDB = async () => {
    try {
        await sql.connect(config);
        console.log("DB Connected!");
    } catch (error) {
        console.error("DB Connection Error:", error);
    }
};
