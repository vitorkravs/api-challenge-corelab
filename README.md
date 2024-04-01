# API REST com AdonisJS e TypeScript

Este projeto consiste em uma API REST desenvolvida com AdonisJS e TypeScript, projetada para interagir com um banco de dados MySQL. A API foi criada como parte de um desafio técnico proposto por uma startup, com o objetivo de demonstrar habilidades em desenvolvimento de backend, design de APIs RESTful e integração com bancos de dados.

# Funcionalidades

A API oferece um conjunto de endpoints para gerenciar recursos como usuários, posts, comentários ou qualquer outro recurso especificado no desafio. As funcionalidades incluem:

CRUD (Criar, Ler, Atualizar, Deletar) para os recursos especificados.
Validação de dados de entrada.
Busca e filtragem de recursos.

# Tecnologias Utilizadas

AdonisJS: Um framework Node.js.
TypeScript: para tipagem estática.
MySQL: Sistema de gerenciamento de banco de dados relacional.

# Requisitos

Para rodar o projeto, é necessário ter instalado:

Node.js (v14 ou superior)
NPM (Node Package Manager)
MySQL Server

# Criando banco de dados MYSQL

No seu bando de dados, utilize esses scripts SQL

```bash

CREATE database NomeDoDataBase;

use NomeDoDataBase;

CREATE TABLE notes (
    id char(36) not null primary key,
    title VARCHAR(255) NOT NULL,
    annotation TEXT NOT NULL,
    is_favorite boolean default false,
    color varchar(255) default "#fff",
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

```

# Configuração do Ambiente

Clone o repositório para sua máquina local:

```bash
git clone https://github.com/vitorkravs/api-challenge-corelab.git

cd seu-repositorio

npm install
```

# Configure as variáveis de ambiente:

Encontre o arquivo .env.example e copie as variaveis de ambiente contidadas nele, exemplo:

```bash
TZ=UTC
PORT=3333
HOST=localhost
LOG_LEVEL=info
APP_KEY=SuaAppKey
NODE_ENV=development
DB_HOST=127.0.0.1
DB_PORT=Porta_do_seu_banco_de_dados
DB_USER=root
DB_PASSWORD=
DB_DATABASE=

```

Em seguida crie um arquivo .env na raiz do projeto e preencha com as suas configurações de banco de dados MySQL, conforme o exemplo:

```bash
TZ=UTC
PORT=3333
HOST=localhost
LOG_LEVEL=info
APP_KEY=SuaAppKey
NODE_ENV=development
DB_CONNECTION=mysql
DB_HOST=0.0.0.0
DB_PORT=Porta_do_seu_banco_de_dados
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_DATABASE=nome_do_banco
```

# Executando a API

Para iniciar o servidor, execute:

```bash
npm run dev

```

O servidor estará rodando no endereço http://seu-ip:3333

# Endpoints

`GET` /api/notes - Lista todos as Notas.

`POST` /api/notes/post - Cadastra uma nova nota.

`PUT` /api/notes/update/:id - Atualiza os dados de uma nota específica.

`DELETE` /api/notes/delete/:id - Remove uma nota do sistema.

`PACTH` /api/notes/toggleIsFavorite/:id - Atualiza a preferência da nota.

`PACTH` /api/notes/toggleColor/:id - Atualiza a cor da nota.

# Testando a API

Você pode usar ferramentas como [Postman] ou [Insomnia] para testar os endpoints da API.

# Contribuição

Sugestões e contribuições são sempre bem-vindas! Sinta-se à vontade para realizar um fork do projeto e abrir um Pull Request com suas melhorias.

### Feito por Vitor Cesar Kravszenko
