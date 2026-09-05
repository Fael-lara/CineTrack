# Análise HTTP

## 1. Primeira requisição

| Método | URL | Status | Content-Type |
|---|---|---:|---|
| GET | https://developer.mozilla.org/pt-BR/ | 200 | text/html |

## 2. Recursos estáticos

Foram analisadas três requisições de recursos estáticos carregados pela página.

| Tipo | Recurso | Status | Content-Type |
|---|---|---:|---|
| CSS | https://developer.mozilla.org/static/client/styles-global.d33f93b53dbc0eb6.css | 200 | text/css |
| JavaScript | https://developer.mozilla.org/static/client/runtime.320816de9aa0f2f8.js | 200 | text/javascript |
| Imagem | https://developer.mozilla.org/static/client/chevron-down.7c923b7054da305b.svg | 200 | image/svg+xml |

As três requisições retornaram status 200. O cabeçalho Content-Type identifica o tipo de conteúdo retornado pelo servidor, sendo `text/css` para a folha de estilos, `text/javascript` para o arquivo JavaScript e `image/svg+xml` para a imagem SVG.

## 3. Requisição com erro 404

Para provocar um erro 404, foi acessado um caminho inexistente no site da MDN.

| Método | URL | Status | Content-Type |
|---|---|---:|---|
| GET | https://developer.mozilla.org/pt-BR/teste | 404 | text/html |

A requisição continuou utilizando o método GET, porém o código de status mudou de 200 para 404. O código 404 indica que o servidor recebeu a requisição, mas não encontrou o recurso solicitado naquele caminho. Mesmo com o erro, o servidor retornou uma resposta em HTML, identificada pelo Content-Type `text/html`.

## 4. Requisição Fetch/XHR

Foi analisada uma requisição de API realizada pelo site da MDN.

| Método | Caminho | Status | Content-Type |
|---|---|---:|---|
| GET | /api/v1/whoami | 200 | application/json |

A requisição utiliza o método GET para consultar a rota `/api/v1/whoami`. O servidor respondeu com status 200 e retornou dados no formato JSON, conforme indicado pelo Content-Type `application/json`.

Comparando com a tabela de requisitos do CineTrack, o mesmo método GET será utilizado para consultar dados no servidor. Para listar todos os filmes, o CineTrack utilizará `GET /filmes`. Para consultar apenas um filme específico, será utilizada a rota `GET /filmes/:id`.

Além dessas consultas, a API do CineTrack utilizará POST para cadastrar novos filmes, PUT para atualizar filmes existentes e DELETE para remover filmes.

## 5. Listagem de filmes na Parte 2

Na Parte 2 do CineTrack, a listagem dos filmes será realizada utilizando o método GET na rota `/filmes`. Essa rota deverá retornar no corpo da resposta a lista completa de filmes em formato JSON. Também será possível utilizar o parâmetro `?status=` para filtrar a lista de acordo com o status do filme.

Cada filme retornado deverá conter seus dados, como id, título, ano, gênero, pôster, nota, status e comentário.