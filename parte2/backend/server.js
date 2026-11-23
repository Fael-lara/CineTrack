const express = require("express");
const fs = require("fs");
const path = require("path");
const morgan = require("morgan");

const app = express();

const ARQUIVO = path.join(__dirname, "data", "filmes.json");

function lerFilmes() {
    return JSON.parse(fs.readFileSync(ARQUIVO, "utf8"));
}

app.use(morgan("dev"));
app.use(express.json());

app.listen(3000, () => console.log("API na porta 3000"));

app.get("/filmes/:id", (req, res) => {
    const id = Number(req.params.id);
    const filme = lerFilmes().find(f => f.id === id);
    if (!filme)
        return res.status(404).json({ erro: "Filme não encontrado"});
    res.json(filme);
});

app.get("/filmes", (req, res) => {
    let lista = lerFilmes();
    if (req.query.status)
        lista = lista.filter(
            f => f.status === req.query.status)
    res.json(lista);
});

