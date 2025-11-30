const db = require("../config/db");

module.exports = {
    async create(order) {
        const { orderId, value, creationDate } = order;
        await db.query(
            "INSERT INTO `Orders` (orderId, value, creationDate) VALUES (?, ?, ?)",
            [orderId, value, creationDate]
        );
    },

    async findById(orderId) {
        const [rows] = await db.query(
            "SELECT * FROM `Orders` WHERE orderId = ?",
            [orderId]
        );
        return rows[0];
    },

    async findAll() {
        const [rows] = await db.query("SELECT * FROM `Orders`");
        return rows;
    },

    async update(orderId, data) {
        const { value, creationDate } = data;
        await db.query(
            "UPDATE `Orders` SET value = ?, creationDate = ? WHERE orderId = ?",
            [value, creationDate, orderId]
        );
    },

    async delete(orderId) {
        await db.query("DELETE FROM `Orders` WHERE orderId = ?", [orderId]);
    }
};
