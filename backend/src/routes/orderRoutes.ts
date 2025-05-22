import express from "express";
import { getOrders, getOrderById, addOrder, updateOrder, deleteOrder } from "../models/orderModel";

const router = express.Router();

/**
 * @swagger
 * /orders:
 *   get:
 *     summary: 発注一覧を取得
 *     responses:
 *       200:
 *         description: 発注一覧の取得成功
 */
router.get("/", async (req, res) => {
    const orders = await getOrders();
    res.json(orders);
});

/**
 * @swagger
 * /orders/{id}:
 *   get:
 *     summary: 指定した発注情報を取得
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: 発注ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: 発注情報の取得成功
 */
router.get("/:id", async (req, res) => {
    const order = await getOrderById(Number(req.params.id));
    res.json(order);
});

/**
 * @swagger
 * /orders:
 *   post:
 *     summary: 新しい発注を追加
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               supplierId:
 *                 type: integer
 *               status:
 *                 type: string
 *     responses:
 *       201:
 *         description: 発注が正常に追加されました
 */
router.post("/", async (req, res) => {
    const { supplierId, status } = req.body;
    await addOrder(Number(supplierId), status);
    res.status(201).send("Order added.");
});

/**
 * @swagger
 * /orders/{id}:
 *   put:
 *     summary: 発注情報を更新
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: 発注ID
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *     responses:
 *       200:
 *         description: 発注情報の更新成功
 */
router.put("/:id", async (req, res) => {
    const { status } = req.body;
    await updateOrder(Number(req.params.id), status);
    res.send("Order updated.");
});

/**
 * @swagger
 * /orders/{id}:
 *   delete:
 *     summary: 発注を削除
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: 発注ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: 発注の削除成功
 */
router.delete("/:id", async (req, res) => {
    await deleteOrder(Number(req.params.id));
    res.send("Order deleted.");
});

export default router;
