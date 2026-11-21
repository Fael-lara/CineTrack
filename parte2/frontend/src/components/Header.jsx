function Header({ busca, aoBuscar, aoAdicionar }) {
    return (
    <header>
        <div className="marca">
        <img src="img/logo-cinetrack.png" alt="Logo CineTrack" className="logo"/>
        <div className="marca-texto">
            <h1>
                <span className="cine">Cine</span><span className="track">Track</span>
            </h1>
            <p className="subtitulo">Sua lista pessoal de filmes</p>
        </div>
    </div>
        <input type="search" aria-label="Buscar filme" placeholder="Buscar filme..." value={busca} onChange={(e) => aoBuscar(e.target.value)}/>
        <button className="adicionar" onClick={aoAdicionar}>
            <span className="texto-mobile">+</span>
            <span className="texto-desktop">+ Adicionar</span>
        </button>
    </header>
    );
}

export default Header;