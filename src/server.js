const express = require("express");
const app = express();
const routes = require("./routes/orderRoutes");

app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3000, () => {
    console.log("API rodando na porta 3000");
});
