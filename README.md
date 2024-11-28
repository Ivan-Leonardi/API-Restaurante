<h1 align="center" style="font-weight: bold;">API Restaurante💻</h1>

<p align="center">
 <a href="#tech">Tecnologias</a> •
 <a href="#started">Iniciar o projeto</a> •
  <a href="#routes">Endpoints da API</a>
</p>

<p align="center">
    <b>Sistema de pedidos de mesa de um restaurante para garçom</b>
</p>

<h2 id="technologies">💻 Tecnologias</h2>

- NodeJS
- Express
- Typescript
- Knex
- SQLite
- Zod

<h2 id="started">🚀 Iniciar o projeto</h2>

<h3>Requisitos</h3>

- NodeJS v-v20.16.0

<h3>Clonar o projeto</h3>

```bash
git clone https://github.com/Ivan-Leonardi/API-Restaurante.git 
```


<h3>Start</h3>

Para rodar o projeto

```bash
cd api-restaurant
npm install
npm run dev
```

<h2 id="routes">📍 Endpoints da API</h2>

Principais rotas
​
| rota              | descrição                                         
|----------------------|-----------------------------------------------------
| <kbd>GET /tables</kbd>  | Listar mesas

| <kbd>GET /products</kbd>  | Listar produtos
| <kbd>POST /products</kbd>  | Criar um novo produto
| <kbd>PUT /products/:id</kbd>  | Editar um produto
| <kbd>PUT /products/:id</kbd>  | Editar um produto
| <kbd>DELETE /products/:id</kbd>  | Remover um produto

| <kbd>GET /tables-sessions</kbd>  | Listar sessão das mesas (abertas ou fechadas)
| <kbd>POST /tables-sessions</kbd>  | Abrir uma sessão para mesa
| <kbd>PATCH /tables-sessions/:id</kbd>  | Fechar uma sessão de mesa

| <kbd>GET /orders/table-session/:id</kbd>  | Listar pedidos de uma mesa
| <kbd>GET /orders/table-session/:id/total</kbd>  | Exibir o valor total dos produtos de uma mesa
| <kbd>POST /orders</kbd>  | Criar o pedido de uma mesa








