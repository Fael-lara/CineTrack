# CineTrack

O CineTrack é um gerenciador pessoal de filmes desenvolvido na disciplina de Programação de Sistemas Web.

O projeto foi desenvolvido em etapas. A Parte 1 utiliza HTML, CSS e JavaScript puro com persistência no `localStorage`. Na Parte 2, a aplicação foi evoluída para React no frontend e Node.js com Express no backend, utilizando um arquivo JSON para persistência dos filmes.

## Funcionalidades

- Listagem de filmes em cards
- Busca por título
- Filtro por status
- Cadastro de filmes
- Edição de filmes
- Remoção de filmes
- Avaliação em estrelas
- Exibição de comentários
- Layout responsivo
- Tema claro e escuro
- Persistência dos filmes
- API REST para operações CRUD

## Tecnologias utilizadas

### Parte 1

- HTML5
- CSS3
- JavaScript
- LocalStorage

### Parte 2

#### Frontend

- React
- Vite
- JavaScript
- CSS

#### Backend

- Node.js
- Express
- CORS
- Morgan
- JSON para persistência dos dados

## Estrutura do projeto

```text
CineTrack/
├── parte1/
│   └── ...
│
├── parte2/
│   ├── frontend/
│   │   ├── src/
│   │   ├── package.json
│   │   └── ...
│   │
│   └── backend/
│       ├── data/
│       │   └── filmes.json
│       ├── seed.js
│       ├── server.js
│       ├── package.json
│       └── .env.example
│
└── README.md
```

## Como rodar o backend

Entre na pasta do backend:

```bash
cd parte2/backend
```

Instale as dependências:

```bash
npm install
```

Crie o arquivo `.env` com base no `.env.example`:

```env
PORT=3000
```

Caso queira restaurar os filmes iniciais, execute:

```bash
npm run seed
```

Inicie a API em modo de desenvolvimento:

```bash
npm run dev
```

Por padrão, a API ficará disponível em:

```text
http://localhost:3000
```

### Rotas da API

```text
GET    /filmes
GET    /filmes/:id
POST   /filmes
PUT    /filmes/:id
DELETE /filmes/:id
```

Também é possível filtrar a listagem por status:

```text
GET /filmes?status=assistido
GET /filmes?status=assistindo
GET /filmes?status=quero
```

## Como rodar o frontend

Em outro terminal, entre na pasta do frontend:

```bash
cd parte2/frontend
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Abra no navegador o endereço informado pelo Vite, normalmente:

```text
http://localhost:5173
```

O backend deve permanecer em execução para que o frontend consiga carregar e modificar os filmes.

## Build do frontend

Para verificar o build de produção:

```bash
cd parte2/frontend
npm run build
```

Também é possível executar a verificação do ESLint:

```bash
npm run lint
```

## Persistência

Na Parte 2, os filmes são armazenados em:

```text
parte2/backend/data/filmes.json
```

As operações de cadastro, edição e remoção realizadas pelo frontend são enviadas à API e persistidas nesse arquivo.

Para restaurar os dados iniciais:

```bash
cd parte2/backend
npm run seed
```

## Variáveis de ambiente

O arquivo `.env` não é versionado.

Um exemplo da configuração necessária está disponível em:

```text
parte2/backend/.env.example
```

Configuração padrão:

```env
PORT=3000
```