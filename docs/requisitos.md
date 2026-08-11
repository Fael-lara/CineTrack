# Requisitos do CineTrack

## Campos de um filme

Cada filme deve possuir os seguintes campos:

- Título
- Ano
- Gênero
- Pôster
- Status
- Nota
- Comentário

## Áreas da interface

A interface do CineTrack será composta por quatro áreas principais:

1. Busca por título
2. Filtros de status
3. Lista de filmes
4. Formulário de cadastro

## Ações, métodos e rotas

| Ação | Método | Rota |
|---|---|---|
| Listar | GET | /filmes |
| Buscar | GET | /filmes/:id |
| Cadastrar | POST | /filmes |
| Editar | PUT | /filmes/:id |
| Remover | DELETE | /filmes/:id |