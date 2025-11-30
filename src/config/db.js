const mysql = require("mysql2/promise");
require("dotenv").config();

// Cria e exporta uma conexão MySQL reutilizável
const connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
});

module.exports = connection;
