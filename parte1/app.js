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


const primeiroCard = document.querySelector(".card");
const badge = primeiroCard.querySelector(".badge");
const paragrafos = primeiroCard.querySelectorAll("p");
const nota = paragrafos[1];
badge.textContent = rotuloStatus("assistido");
nota.textContent = "Nota: " + estrelas(5);


const TOTAL = 6;
const rodape = document.querySelector("footer small");
rodape.textContent = `CineTrack © 2026 · ${TOTAL} filmes cadastrados`;