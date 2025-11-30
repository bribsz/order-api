const express = require("express");
const controller = require("../controllers/orderController");
const auth = require("../middleware/auth");

const router = express.Router();

router.post("/order", auth, controller.create);
router.get("/order/list", auth, controller.list);
router.get("/order/:id", auth, controller.get);
router.put("/order/:id", auth, controller.update);
router.delete("/order/:id", auth, controller.remove);


module.exports = router;
