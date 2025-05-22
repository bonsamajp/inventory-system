import express from "express";
import { getProducts, getProductById, addProduct, updateProduct, deleteProduct } from "../models/productModel";

const router = express.Router();

/**
 * @swagger
 * /products:
 *   get:
 *     summary: 商品一覧を取得
 *     responses:
 *       200:
 *         description: 商品一覧の取得成功
 */
router.get("/", async (req, res) => {
    const products = await getProducts();
    res.json(products);
});

/**
 * @swagger
 * /products/{id}:
 *   get:
 *     summary: 指定した商品を取得
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: 商品のID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: 商品情報の取得成功
 */
router.get("/:id", async (req, res) => {
    const product = await getProductById(Number(req.params.id));
    res.json(product);
});

/**
 * @swagger
 * /products:
 *   post:
 *     summary: 新しい商品を追加
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *               stockQuantity:
 *                 type: integer
 *     responses:
 *       201:
 *         description: 商品が正常に追加されました
 */
router.post("/", async (req, res) => {
    const { name, description, price, stockQuantity } = req.body;
    await addProduct(name, description, price, stockQuantity);
    res.status(201).send("Product added.");
});

/**
 * @swagger
 * /products/{id}:
 *   put:
 *     summary: 商品情報を更新
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: 商品のID
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *               stockQuantity:
 *                 type: integer
 *     responses:
 *       200:
 *         description: 商品情報の更新成功
 */
router.put("/:id", async (req, res) => {
    const { name, description, price, stockQuantity } = req.body;
    await updateProduct(Number(req.params.id), name, description, price, stockQuantity);
    res.send("Product updated.");
});

/**
 * @swagger
 * /products/{id}:
 *   delete:
 *     summary: 商品を削除
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: 商品のID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: 商品の削除成功
 */
router.delete("/:id", async (req, res) => {
    await deleteProduct(Number(req.params.id));
    res.send("Product deleted.");
});

export default router;
