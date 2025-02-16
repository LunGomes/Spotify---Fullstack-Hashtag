// API significa Application Programming Interface --> Sisteminha usado para a comunicação de duas ou mais "entidades" ou "computadores"
// GET, POST, PUT, DELETE
// CRUD - Create Read Update Delete
// Endpoint
// Middleware --> é uma função que acontece no meio do caminho, entre a escuta da api e a requisição. Trata a requisição antes dela chegar, trata a resposta que vai pro front, etc   

import express from "express";
import cors from "cors";
import { db } from "./connect.js";

const app = express();
const PORT = 3000;

app.use(cors()); // deve ser colocado antes de tudo

app.get('/', (request, response) => {
    response.send('Olá Mundo')
})

app.get('/artists', async (request, response) => {
    response.send(await db.collection("artists").find({}).toArray())
})

app.get('/songs', async (request, response) => {
    response.send(await db.collection("songs").find({}).toArray())
})

app.listen(PORT, () => {
    console.log(`Servidor está rodando na porta ${PORT}`)
})