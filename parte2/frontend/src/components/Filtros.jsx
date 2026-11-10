function Filtros() {
    return (
        <nav aria-label="Filtros de status">
        <button type="button" class="ativo" data-status="todos">Todos</button>
        <button type="button" data-status="assistido">Assistido</button>
        <button type="button" data-status="assistindo">Assistindo</button>
        <button type="button" data-status="quero">Quero assistir</button>
        </nav>
    );
}

export default Filtros;