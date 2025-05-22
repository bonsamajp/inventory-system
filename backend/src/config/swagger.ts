import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";

// OpenAPI（Swagger）仕様定義
const options: swaggerJsdoc.Options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Inventory API",
            version: "1.0.0",
            description: "在庫管理システムのAPIドキュメント"
        },
        servers: [{ url: "http://localhost:3000" }]
    },
    apis: ["./src/routes/*.ts"] // APIの定義を含むファイルを指定
};

const swaggerSpec = swaggerJsdoc(options);

// ExpressアプリにSwagger UIを設定する関数
export const setupSwagger = (app: Express) => {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
