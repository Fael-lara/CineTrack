function estrelas(nota) {
    return "★".repeat(nota) + "✩".repeat(5 - nota);
}

const ROTULOS = {
    assistido: "Assistido",
    assistindo: "Assistindo",
    quero: "Quero assistir",
};

function CardFilme({ filme }) {
    return (
        <article className="card" data-id={filme.id}>
            <img src={filme.poster} alt={`Banner ${filme.titulo}`}/>
            <h2>{filme.titulo}</h2>
            <p>{filme.ano} - {filme.genero}</p>
            <p>{estrelas(filme.nota)}</p>
            <span className={`badge ${filme.status}`}>
            <p>{ROTULOS[filme.status]}</p>
            </span>
            <div className="acoes">
                <button className="button btn-editar">Editar</button>
                <button className="button btn-remover">Remover</button>
            </div>
        </article>
    );
}

export default CardFilme;