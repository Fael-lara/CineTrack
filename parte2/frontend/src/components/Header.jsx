function Header({ busca, aoBuscar }) {
    return (
    <header>
        <div class="marca">
        <img src="img/logo-cinetrack.png" alt="Logo CineTrack" class="logo"/>
        <div class="marca-texto">
            <h1>
                <span class="cine">Cine</span><span class="track">Track</span>
            </h1>
            <p class="subtitulo">Sua lista pessoal de filmes</p>
        </div>
    </div>
        <input type="search" aria-label="Buscar filme" placeholder="Buscar filme..." value={busca} onChange={(e) => aoBuscar(e.target.value)}/>
        <button class="adicionar">
            <span class="texto-mobile">+</span>
            <span class="texto-desktop">+ Adicionar</span>
        </button>
    </header>
    );
}

export default Header;