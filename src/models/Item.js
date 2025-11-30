const db = require("../config/db");

module.exports = {
    async create(orderId, items) {
        for (const item of items) {
            await db.query(
                "INSERT INTO Items (orderId, productId, quantity, price) VALUES (?, ?, ?, ?)",
                [orderId, item.productId, item.quantity, item.price]
            );
        }
    },

    async findByOrder(orderId) {
        const [rows] = await db.query("SELECT * FROM Items WHERE orderId = ?", [
            orderId,
        ]);
        return rows;
    }
};
