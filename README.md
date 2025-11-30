# API de Pedidos – Node.js + Express + MySQL

API criada para gerenciar pedidos, incluindo criação, consulta, listagem, atualização e exclusão.

## Tecnologias
- Node.js
- Express
- MySQL
- Postman
- XAMPP

Configuração do Ambiente

Crie um arquivo .env na raiz:

PORT=3000
MYSQL_HOST=localhost
MYSQL_USER=root
MYSQL_PASSWORD=
MYSQL_DATABASE=ordersdb

Banco de Dados

Use o MySQL (XAMPP, WAMP ou MySQL Server).

Crie o banco:

CREATE DATABASE ordersdb;

Crie a tabela de pedidos:

CREATE TABLE orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  customer VARCHAR(100),
  product VARCHAR(100),
  quantity INT,
  price DECIMAL(10,2)
);

Como Rodar o Projeto
Instalar dependências:
npm install

Rodar em modo desenvolvimento:
npm run dev

Rodar normalmente:
npm start


A API iniciará em:

http://localhost:3000

Rotas da API

Criar Pedido

POST /order

Body (JSON):
{
  "numeroPedido": "v10089015vdb-01",
  "valorTotal": 10000,
  "dataCriacao": "2023-07-19T12:24:11.5299601+00:00",
  "items": [
    {
      "idItem": "2434",
      "quantidadeItem": 1,
      "valorItem": 1000
    }
  ]
}

Buscar Pedido por ID

GET /order/:id

Listar Todos os Pedidos

GET /order/list

Atualizar Pedido

PUT /order/:id

Body (JSON):
{
  "valorTotal": 15000,
  "items": [
    {
      "idItem": "2434",
      "quantidadeItem": 2,
      "valorItem": 1000
    }
  ]
}

Remover Pedido

DELETE /order/:id

Coleção do Postman

Você encontra a coleção pronta para teste na pasta:

/postman/order-api.postman_collection.json

Observações

O projeto não utiliza autenticação JWT.

O middleware auth.js está presente, mas não faz validação.