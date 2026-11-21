import { useState } from "react";

const VAZIO = {
    titulo: "",
    ano: "",
    genero: "",
    status: "quero",
    nota: 3,
};


function ModalFilme({ filme, aoSalvar, aoFechar }) {
    const [dados, setDados] = useState({...VAZIO,...filme})

    function atualizar(campo, valor) {
    setDados((anteriores) => ({...anteriores, [campo]: valor}));
    }

    function submeter(evento) {
    evento.preventDefault();
    aoSalvar({...dados, ano: Number(dados.ano), nota: Number(dados.nota)});
    }

    return (
        <div id="modal">
            <div className="modal-conteudo">
                <h2>Adicionar filme</h2>
                <form id="form-filme" onSubmit={submeter}>
                    <label for="titulo">Titulo</label> <br/>
                    <input id="titulo" type="text" name="titulo" required 
                    value={dados.titulo} onChange={(e) => atualizar("titulo", e.target.value)}/> <br/>
                    
                    <label for="ano">Ano</label> <br/>
                    <input id="ano" type="number"
                    min="1888" max="2030" name="ano" required
                    value={dados.ano} onChange={(e) => atualizar("ano", e.target.value)}/> <br/>

                    <label for="genero">Gênero</label> <br/>
                    <input id="genero" type="text" name="genero" required
                    value={dados.genero} onChange={(e) => atualizar("genero", e.target.value)}/> <br/>

                    <label for="poster">Url do pôster</label> <br/>
                    <input id="poster" type="url" name="poster"  value={dados.poster} onChange={(e) => atualizar("poster", e.target.value)}/> <br/>

                    <label for="status">Status</label> <br/>
                    <select id="status" name="status" required 
                    value={dados.status} onChange={(e) => atualizar("status", e.target.value)}>
                            <option value="quero">Quero Assistir</option>
                            <option value="assistido">Assistido</option>
                            <option value="assistindo">Assistindo</option>
                    </select> <br/>

                    <label for="nota">Nota (1 a 5)</label> <br/>
                    <input id="nota" type="number" min="1" max="5" name="nota"
                    value={dados.nota} onChange={(e) => atualizar("nota", e.target.value)}/> <br/>

                    <label for="comentario">Comentário</label> <br/>
                    <textarea id="comentario" name="comentario"  value={dados.comentario} onChange={(e) => atualizar("comentario", e.target.value)}></textarea> <br/>

                    <button type="button" className="btn-cancelar" onClick={aoFechar}>Cancelar</button>
                    <button type="submit" className="btn-salvar">salvar</button>
                </form>
            </div>
        </div>
    )
    
}

export default ModalFilme;