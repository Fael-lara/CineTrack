const filmesIniciais = [
    {
        "id": 1,
        "titulo": "A Origem",
        "ano": 2010,
        "genero": "Ficção científica",
        "poster": "https://www.themoviedb.org/t/p/w600_and_h900_face/9e3Dz7aCANy5aRUQF745IlNloJ1.jpg",
        "nota": 5,
        "status": "assistido",
        "comentario": "Revejo sempre."
    },
    {
        "id": 2,
        "titulo": "Parasita",
        "ano": 2019,
        "genero": "Suspense",
        "poster": "https://www.themoviedb.org/t/p/w600_and_h900_face/igw938inb6Fy0YVcwIyxQ7Lu5FO.jpg",
        "nota": 4,
        "status": "assistido",
        "comentario": ""
    },
    {
        "id": 3,
        "titulo": "O Auto da Compadecida",
        "ano": 2000,
        "genero": "Comédia",
        "poster": "https://www.themoviedb.org/t/p/w600_and_h900_face/imcOp1kJsCsAFCoOtY5OnPrFbAf.jpg",
        "nota": 5,
        "status": "assistido",
        "comentario": "Clássico nacional."
    },
    {
        "id": 4,
        "titulo": "Duna: Parte Dois",
        "ano": 2024,
        "genero": "Ficção científica",
        "poster": "https://www.themoviedb.org/t/p/w600_and_h900_face/8LJJjLjAzAwXS40S5mx79PJ2jSs.jpg",
        "nota": 4,
        "status": "assistindo",
        "comentario": ""
    },
    {
        "id": 5,
        "titulo": "Interestelar",
        "ano": 2014,
        "genero": "Ficção científica",
        "poster": "https://www.themoviedb.org/t/p/w600_and_h900_face/6ricSDD83BClJsFdGB6x7cM0MFQ.jpg",
        "nota": 5,
        "status": "quero",
        "comentario": ""
    },
    {
        "id": 6,
        "titulo": "Cidade de Deus",
        "ano": 2002,
        "genero": "Drama",
        "poster": "https://www.themoviedb.org/t/p/w600_and_h900_face/gfnXixcGC060QcG6JPxN6AMdVsq.jpg",
        "nota": 4,
        "status": "quero",
        "comentario": ""
    }
];

let filmes = [...filmesIniciais];
const nav = document.querySelector("nav")
const lista = document.querySelector("#lista");

function renderizarCards(filmes) {
    const cards = filmes.map((f) => `
        <article class="card" data-id="${f.id}">
            <img alt="Banner ${f.titulo}" src="${f.poster}">
            <h2>${f.titulo}</h2>
            <p>${f.ano} - ${f.genero}</p>
            <p>Nota: ${estrelas(f.nota)}</p>
            <span class="badge ${f.status}">${rotuloStatus(f.status)}</span>
            
            <div class="acoes">
                <button class="button btn-editar">Editar</button>
                <button class="button btn-remover">Remover</button>
            </div>
        </article>
    `).join("");
    lista.innerHTML = cards;
}

lista.addEventListener("click", (e) => {
    const botao = e.target.closest(".btn-remover");
    if (!botao) return;
    if (!confirm("Remover este filme?")) return;
    const card = botao.closest(".card");
    const id = Number(card.dataset.id);
    filmes = filmes.filter((f) => f.id !== id);
    const status = nav.querySelector(".ativo").dataset.status;
    renderizarCards(filmes.filter((f) => status === "todos" || f.status === status));
});

nav.addEventListener("click", (e) => {
    const botao = e.target.closest("button");
    if (!botao) return;
    nav.querySelector(".ativo").classList.remove("ativo");
    botao.classList.add("ativo");
    const status = botao.dataset.status;
    renderizarCards(filmes.filter((f) => status === "todos" || f.status === status));
});

function rotuloStatus(status) {
    if (status === "assistido") return "Assistido";
    if (status === "assistindo") return "Assistindo";
    if (status === "quero") return "Quero Assistir";
    return status;
}

const estrelas = (nota) => {
    let resp = "";

    for (let i = 1; i <= 5; i++) {
        resp += i <= nota ? "★" : "☆";
    }

    return resp;
};

renderizarCards(filmes);

const primeiroCard = document.querySelector(".card");
const badge = primeiroCard.querySelector(".badge");
const paragrafos = primeiroCard.querySelectorAll("p");
const nota = paragrafos[1];
badge.textContent = rotuloStatus("assistido");
nota.textContent = "Nota: " + estrelas(2);


const TOTAL = 6;
const rodape = document.querySelector("footer small");
rodape.textContent = `CineTrack © 2026 · ${TOTAL} filmes cadastrados`;