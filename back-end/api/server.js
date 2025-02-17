// API significa Application Programming Interface --> Sisteminha usado para a comunicação de duas ou mais "entidades" ou "computadores"
// GET, POST, PUT, DELETE
// CRUD - Create Read Update Delete
// Endpoint
// Middleware --> é uma função que acontece no meio do caminho, entre a escuta da api e a requisição. Trata a requisição antes dela chegar, trata a resposta que vai pro front, etc   

import express, { response } from "express";
import cors from "cors";
import { db } from "./connect.js";
import path from "path";

const __dirname = path.resolve();
// console.log(__dirname)

const app = express();
const PORT = 3000;

app.use(cors()); // deve ser colocado antes de tudo

app.get("/api/", (request, response) => {
    response.send("Olá Mundo");
});

app.get("/api/artists", async (request, response) => {
    response.send(await db.collection("artists").find({}).toArray());
});

app.get("/api/songs", async (request, response) => {
    response.send(await db.collection("songs").find({}).toArray());
});

app.use(express.static(path.join(__dirname, "../front-end/dist")));

app.get("*", async (request, response) => {
    response.sendFile(path.join(__dirname, "../front-end/dist/index.html"));
});

app.listen(PORT, () => {
    console.log(`Servidor está rodando na porta ${PORT}`);
});