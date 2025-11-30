const db = require("../config/db");

module.exports = {
    // Insere um novo pedido na tabela Orders
    async create(order) {
        const { orderId, value, creationDate } = order;
        await db.query(
            "INSERT INTO `Orders` (orderId, value, creationDate) VALUES (?, ?, ?)",
            [orderId, value, creationDate]
        );
    },

    // Busca um pedido pelo ID
    async findById(orderId) {
        const [rows] = await db.query(
            "SELECT * FROM `Orders` WHERE orderId = ?",
            [orderId]
        );
        return rows[0];
    },

    // Retorna todos os pedidos cadastrados
    async findAll() {
        const [rows] = await db.query("SELECT * FROM `Orders`");
        return rows;
    },

    // Atualiza um pedido existente
    async update(orderId, data) {
        const { value, creationDate } = data;
        await db.query(
            "UPDATE `Orders` SET value = ?, creationDate = ? WHERE orderId = ?",
            [value, creationDate, orderId]
        );
    },

    // Exclui um pedido pelo ID
    async delete(orderId) {
        await db.query("DELETE FROM `Orders` WHERE orderId = ?", [orderId]);
    }
};
