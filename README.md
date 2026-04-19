# 🍳 WebRecipes API

<p align="center">
  <img src="https://img.shields.io/badge/License-ISC-blue.svg" alt="License" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Node.js-43853D?style=flat&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/fastify-%23000000.svg?style=flat&logo=fastify&logoColor=white" alt="Fastify" />
  <img src="https://img.shields.io/badge/Prisma-3982CE?style=flat&logo=Prisma&logoColor=white" alt="Prisma" />
  <img src="https://img.shields.io/badge/postgresql-4169e1?style=flat&logo=postgresql&logoColor=white" alt="PostgreSQL" />
  <img src="https://img.shields.io/badge/-Vitest-729B1B?style=flat&logo=vitest&logoColor=white" alt="Vitest" />
  <img src="https://img.shields.io/badge/Docker-2CA5E0?style=flat&logo=docker&logoColor=white" alt="Docker" />
</p>

> Uma API RESTful moderna e robusta para uma plataforma de compartilhamento de receitas, permitindo que usuários criem contas, publiquem receitas e interajam com a comunidade de forma simples e organizada.

---

## 📖 Sobre o Projeto

A **WebRecipes API** foi construída seguindo os princípios **SOLID** para garantir uma arquitetura limpa bem separada, escalável e de fácil manutenção. O backend gerencia toda a lógica de perfis, publicação de receitas e as interações sociais como likes, favoritos e comentários.

## ✨ Funcionalidades

* 👤 **Usuário & Perfil**
  * Criar conta de usuário com autenticação JWT.
  * Criar e gerenciar perfil completo (bio, localização, especialidades culinárias).

* 📖 **Receitas**
  * Publicar novas receitas com tempo de preparo, porções, ingredientes e instruções detalhadas.
  * Editar e deletar receitas próprias.
  * Explorar e visualizar receitas de outros usuários.

* ❤️ **Interações Sociais**
  * Curtir (Like) e Favoritar (Bookmark) receitas.
  * Adicionar e excluir comentários nas receitas.

---

## 🧱 Arquitetura e Estrutura do Projeto

A aplicação segue uma arquitetura baseada em casos de uso, isolando regras de negócio do controle de rotas ou banco de dados.

```text
src/
 ├── @types/          # Definições de tipos TS
 ├── app.ts           # Configuração base do Fastify
 ├── server.ts        # Ponto de entrada 
 ├── env/             # Validação de variáveis de ambiente com Zod
 ├── domain/          # Lógica independente de frameworks
 │   ├── dtos/
 │   └── entities/
 ├── http/            # Camada de entrega (Delivery)
 │   ├── controllers/ # Isolamento das requisições HTTP
 │   ├── middleware/  # Middlewares como o de Autenticação JWT
 │   └── routes/      # Definição das rotas principais
 ├── repositories/    # Interfaces e implementações ao banco (Prisma/In-memory)
 │   └── prisma/      # Repositórios mapeados utilizando Prisma ORM
 ├── use-cases/       # Casos de uso (Regras de negócio)
 ├── factories/       # Padrão Factory para injeção de dependência dos Use Cases
 └── errors/          # Tratamento de exceções customizadas
```

---

## 🚀 Como Executar o Projeto

### 1️⃣ Pré-requisitos
* [Node.js](https://nodejs.org/) (versão LTS)
* [Docker e Docker Compose](https://www.docker.com/) 

### 2️⃣ Configuração do Ambiente

Clone o repositório e instale as dependências:
```bash
git clone https://github.com/seu-usuario/WebRecipes-API.git
cd WebRecipes-API
npm install
```

Crie o arquivo `.env` na raiz do projeto:
```env
DATABASE_URL=postgresql://WebRecipes:10984@localhost:5432/webrecipes?schema=public
JWT_SECRET=sua-chave-secreta-super-segura
```

### 3️⃣ Subindo o Banco de Dados com Docker

Utilize o docker-compose para rodar o **PostgreSQL**:
```bash
docker-compose up -d
```

### 4️⃣ Banco de Dados e Execução

Aplique as migrações do Prisma para criar as tabelas e inicie o app:
```bash
npx prisma migrate dev
npm run dev
```
🎉 A aplicação estará rodando com **hot-reload** (via `tsx`).

---

## 🐳 Rodando Tudo com Docker (API + DB)

Se quiser rodar tanto a API quanto o Banco sem configurar o Node na sua máquina (usando o `docker-compose.yml` completo):

1. Modifique a `DATABASE_URL` no seu `.env`:
```env
DATABASE_URL=postgresql://WebRecipes:10984@webrecipes-db:5432/webrecipes
```
2. Suba todos os containers:
```bash
docker-compose up --build -d
```
3. Execute as migrações no container da API:
```bash
docker-compose exec api npx prisma migrate dev
```

---

## 🧪 Testes Unitários

A aplicação conta com **testes unitários focados nos Use Cases**, utilizando **Vitest** e o padrão de **In-Memory Repositories**. Nenhuma requisição a banco ou framework atrapalha a validação da regra de negócio, garantindo testes ⚡ **Rápidos**, 🔒 **Confiáveis** e 🧼 **Puros**.

Para executar:
```bash
# Rodar todos os testes de uma vez
npm run test

# Rodar os testes observando alterações
npm run test:watch
```

---

## 📡 Visão Geral da API

Todas as rotas (exceto geração de tokens/cadastro) são protegidas via **JWT** (`@fastify/jwt`).

* **POST** `/users` - Registro
* **POST** `/sessions` - Login
* **POST** `/recipes` - Criar Receita
* **PATCH** `/recipes/:id` - Editar Receita (Apenas autor)
* **POST** `/recipes/:recipeId/likes` - Curtir
* **POST** `/recipes/:recipeId/favorites` - Favoritar
* **POST** `/recipes/:recipeId/comments` - Comentar

> Verifique `src/http/routes` para a lista completa e middlewares utilizados.
