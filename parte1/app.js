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

function criarCard(f) {
    const card = document.createElement("article");
    card.className = "card";
    card.dataset.id = f.id;
    const img = document.createElement("img");
    img.alt = `Banner ${f.titulo}`;
    img.src = f.poster;
    card.append(img)
    const titulo = document.createElement("h2");
    titulo.textContent = f.titulo;
    card.append(titulo);
    const anoGenero = document.createElement("p");
    anoGenero.textContent = `${f.ano} - ${f.genero}`;
    card.append(anoGenero);
    const nota = document.createElement("p");
    nota.textContent = `Nota: ${estrelas(f.nota)}`;
    card.append(nota);
    const badge = document.createElement("span");
    badge.className = `badge ${f.status}`;
    badge.textContent = rotuloStatus(f.status);
    card.append(badge);
    const acoes = document.createElement("div");
    acoes.className = "acoes";
    card.append(acoes);
    const btnEditar = document.createElement("button");
    btnEditar.className = "button btn-editar";
    btnEditar.textContent = "Editar";
    acoes.append(btnEditar);
    const btnRemover = document.createElement("button");
    btnRemover.className = "button btn-remover";
    btnRemover.textContent = "Remover";
    acoes.append(btnRemover);
    return card;
}

function renderizarCards(filmes) {
    const frag = document.createDocumentFragment();
    filmes.forEach((f) => frag.appendChild(criarCard(f)));
    lista.replaceChildren(frag);
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

let editandoId = null;
const modal = document.querySelector("#modal");
const form = document.querySelector("#form-filme")
const abrir = () => modal.hidden = false;
const fechar = () => modal.hidden = true;
document.querySelector("header button").addEventListener("click", () => {
    editandoId = null;
    form.reset();
    abrir();
});

document.addEventListener("keydown", (e) => {
    if (e.key == "Escape" && !modal.hidden) {
        fechar();
    }
});

modal.addEventListener("click", (e) => {
    const botao = e.target.closest(".btn-cancelar");
    if (botao && !modal.hidden) {
        fechar();
    }
});

lista.addEventListener("click", (e) => {
    const botao = e.target.closest(".btn-editar");
    if (!botao) return;
    const card = botao.closest(".card")
    editandoId = Number(card.dataset.id)
    const f = filmes.find((x) => x.id === editandoId);
    form.elements.titulo.value = f.titulo;
    form.elements.ano.value = f.ano;
    form.elements.genero.value = f.genero;
    form.elements.url.value = f.poster;
    form.elements.status.value = f.status;
    form.elements.nota.value = f.nota;
    form.elements.comentario.value = f.comentario; 
    abrir();
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const dados = Object.fromEntries(new FormData(form));
    dados.ano = Number(dados.ano);
    dados.nota = Number(dados.nota);
    const { valido, erros } = validarFilme(dados);
    if (!valido) { alert(erros.join("\n")); return; }
    if (editandoId !== null) {
        filmes = filmes.map((f) =>  
        f.id === editandoId
        ? { ...f, ...dados} : f);
    } else {
        filmes =  [...filmes, { id: gerarId(filmes), ...dados }];
    }
    const status = nav.querySelector(".ativo").dataset.status;
    renderizarCards(filmes.filter((f) => status === "todos" || f.status === status));
    fechar();
});

const gerarId = (lista) => Math.max(0, ...lista.map((f) => f.id)) + 1;

function validarFilme(filme) {
    const erros = [];
    if (!filme.titulo)
        erros.push("Título obrigatório");
    if (!filme.ano)
        erros.push("Ano obrigatório");
    if (filme.ano < 1888 || filme.ano > 2030)
        erros.push("Ano inválido");
    if (!filme.genero)
        erros.push("Gênero obrigatório");
    if (!filme.status)
        erros.push("Status obrigatório");
    if (filme.nota < 0 || filme > 5)
        erros.push("Nota inválida");
    return { valido: erros.length === 0, erros};
}

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