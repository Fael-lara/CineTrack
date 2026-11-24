import Header from "./components/Header.jsx"
import Filtros from "./components/Filtros.jsx"
import ListaFilmes from "./components/ListaFilmes.jsx"
import { useEffect, useState } from "react";
import ModalFilme from "./components/ModalFilme.jsx";
import { atualizar, criar, listar, remover } from "./api.js";


function App() {
  const [editando, setEditando] = useState(null);
  const [status, setStatus] = useState("todos");
  const [busca, setBusca] = useState("");
  const [filmes, setFilmes] = useState([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState(null)
  const visiveis = filmes
  .filter(
    (filme) =>
      status === "todos" ||
      filme.status === status
  )
  .filter(
    (filme) =>
      filme.titulo.toLocaleLowerCase()
      .includes(busca.toLocaleLowerCase())
  );

async function salvar(filme) {
  if (filme.id) {
    const at = await atualizar(filme.id, filme);
    setFilmes(fs => fs.map(f => f.id === at.id ? at : f));
  } else {
    const novo = await criar(filme);
    setFilmes(fs => [...fs, novo]);
  }
  setEditando(null);
}

async function removerFilme(id) {
  await remover(id);
  setFilmes(fs => fs.filter(f => f.id !== id));
}

  useEffect(() => {
    listar()
    .then(setFilmes)
    .catch((erro) => setErro(erro.message))
    .finally(() => setCarregando(false));
  }, []);

  useEffect(() => {
    document.title = `CineTrack (${filmes.length})`;
  }, [filmes.length]);

  let conteudo;
  if (carregando) {
    conteudo = <p>Carregando...</p>;
  } else if (erro) {
    conteudo = (
      <p className="erro">Erro: {erro}</p>
  );
  } else {
    conteudo = <ListaFilmes filmes={visiveis}
        aoEditar={setEditando}
        aoRemover={removerFilme}/>;
  }
  return (
    <>
      <Header
        busca={busca}
        aoBuscar={setBusca}
        aoAdicionar={() => setEditando({})}
      />
      <Filtros
        ativo={status}
        aoMudar={setStatus}
      />
      <main>{conteudo}</main>
    
      {editando !== null && (
        <ModalFilme
          filme={editando}
          aoSalvar={salvar}
          aoFechar={() => setEditando(null)}
        />
      )}
    </>
  );
}

export default App;