const Order = require("../models/Order");
const Item = require("../models/Item");

module.exports = {

    async create(req, res) {
        try {
            const payload = req.body;

            const mapped = {
                orderId: payload.numeroPedido,
                value: payload.valorTotal,
                creationDate: new Date(payload.dataCriacao),
                items: payload.items.map(i => ({
                    productId: parseInt(i.idItem),
                    quantity: i.quantidadeItem,
                    price: i.valorItem
                }))
            };

            await Order.create(mapped);
            await Item.create(mapped.orderId, mapped.items);

            res.status(201).json({ message: "Pedido criado com sucesso", order: mapped });

        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    async get(req, res) {
        try {
            const order = await Order.findById(req.params.id);
            if (!order) return res.status(404).json({ message: "Pedido não encontrado" });

            const items = await Item.findByOrder(req.params.id);

            res.json({ ...order, items });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    async list(req, res) {
        try {
            const orders = await Order.findAll();
            res.json(orders);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    async update(req, res) {
        try {
            await Order.update(req.params.id, req.body);
            res.json({ message: "Pedido atualizado" });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    async remove(req, res) {
        try {
            await Order.delete(req.params.id);
            res.json({ message: "Pedido deletado" });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
};
