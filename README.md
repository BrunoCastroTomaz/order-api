# Order API

API REST desenvolvida em **Node.js + MongoDB** para gerenciamento de pedidos.

Este projeto foi desenvolvido como parte de um **teste técnico para a posição de Analista de Sistemas Jr** na empresa **Jitterbit** 

---

# Arquitetura

A API segue uma arquitetura em camadas inspirada no padrão **MVC**:

* **Routes** → definição dos endpoints
* **Controllers** → lógica da aplicação
* **Models** → definição de dados (MongoDB / Mongoose)
* **Middlewares** → autenticação, validação e tratamento de erros
* **Config** → configuração de banco de dados
* **Docs** → documentação Swagger

---

# Tecnologias utilizadas

* Node.js
* Express
* MongoDB
* Mongoose
* JWT (autenticação)
* Joi (validação de dados)
* Swagger (documentação da API)
* Nodemon

---

# Instalação

Clone o repositório:

```bash
git clone https://github.com/BrunoCastroTomaz/order-api.git
```

Entre na pasta do projeto:

```bash
cd order-api
```

Instale as dependências:

```bash
npm install
```

---

# Variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto.

Exemplo:

```
PORT=3000
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/orderdb
JWT_SECRET=secret
```

---

# Executando o projeto

Modo desenvolvimento:

```bash
npm run dev
```

A API estará disponível em:

```
http://localhost:3000
```

---

# Autenticação

A API utiliza **JWT (JSON Web Token)**.

Primeiro gere um token:

```
POST /auth/login
```

Body:

```json
{
  "username": "admin",
  "password": "123456"
}
```

Resposta:

```json
{
  "token": "JWT_TOKEN"
}
```

Depois inclua o token no header das requisições:

```
Authorization: Bearer JWT_TOKEN
```

---

# Endpoints da API

## Criar um novo pedido

```
POST /order
```

## Buscar pedido e obter os seus dados

```
GET /order/:orderId
```

## Listar todos os pedidos

```
GET /order/list
```

## Atualizar o pedido

```
PUT /order/:orderId
```

## Deletar pedido

```
DELETE /order/:orderId
```

---

# Exemplo de requisição

Criar pedido:

```bash
curl -X POST http://localhost:3000/order \
-H "Authorization: Bearer TOKEN" \
-H "Content-Type: application/json" \
-d '{
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
}'
```

---

# Documentação da API

A documentação interativa está disponível em:

```
http://localhost:3000/api-docs
```

Utilizando **Swagger UI** é possível testar todos os endpoints diretamente pelo navegador.

---

# Estrutura do projeto

```
src
 ├── config
 │    └── database.js
 │
 ├── controllers
 │    ├── authController.js
 │    └── orderController.js
 │
 ├── docs
 │    └── swagger.js
 │
 ├── middlewares
 │    ├── authMiddleware.js
 │    └── errorHandler.js
 |	  |── validate.js
 │
 ├── models
 │    └── orderModel.js
 │
 ├── repositories
 │    └── orderRepository.js
 |
 ├── routes
 │    ├── authRoutes.js
 │    └── orderRoutes.js
 │    ├── index.js
 │
 ├── services
 │    └── orderService.js
 |
 ├── utils
 │    └── orderMapper.js
 |
 ├── validators
 │    └── orderValidator.js
 │
 ├── app.js
 └── server.js
```

---

# Autor

Bruno Castro Tomaz
