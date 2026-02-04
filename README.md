# 🍽️ WebRecipes-API

Uma API RESTful para uma aplicação de receitas, onde usuários podem criar contas, publicar receitas e interagir com conteúdos de outros usuários de forma simples e organizada.

---

## 🚀 Funcionalidades

* 👤 **Usuário & Perfil**

  * Criar conta de usuário
  * Criar e gerenciar perfil

* 📖 **Receitas**

  * Criar receitas
  * Visualizar receitas de outros usuários

* ❤️ **Interações**

  * Curtir (like) receitas
  * Favoritar receitas

* 💬 **Comentários**

  * Comentar em receitas de outros usuários
  * Deletar comentários próprios

---

## 🧱 Estrutura do Projeto

A aplicação segue uma arquitetura bem organizada, separando responsabilidades e facilitando a manutenção e escalabilidade:

```
prisma/
src/
 ├── @types/
 ├── domain/
 │   ├── dtos/
 │   └── entities/
 ├── env/
 ├── http/
 │   ├── controllers/
 │   │   ├── comment/
 │   │   ├── favorite/
 │   │   ├── like/
 │   │   ├── recipe/
 │   │   └── user/
 │   ├── middleware/
 │   └── routes/
 ├── lib/
 ├── repositories/
 ├── services/
 ├── errors/
 ├── factories/
 ├── use-cases/
 ├── app.ts
 └── server.ts
.env
.gitignore
```

### 📌 Destaques da Arquitetura

* **Domain-driven**: regras de negócio bem separadas (`entities`, `dtos`, `use-cases`)
* **Controllers**: responsáveis apenas por lidar com HTTP
* **Repositories**: abstração do acesso a dados
* **Services & Factories**: centralizam lógica compartilhada e criação de dependências
* **Prisma**: ORM para comunicação com o banco de dados

---

## 🛠️ Tecnologias Utilizadas

* **Node.js**
* **TypeScript**
* **Fastify**
* **Prisma ORM**
* **JWT** para autenticação
* **PostgreSQL** (ou outro banco compatível com Prisma)

---

## ⚙️ Configuração do Ambiente

1. Clone o repositório

```bash
git clone <url-do-repositorio>
```

2. Instale as dependências

```bash
npm install
```

3. Configure o arquivo `.env`

```env
DATABASE_URL=
JWT_SECRET=
```

4. Rode as migrations do Prisma

```bash
npx prisma migrate dev
```

5. Inicie o servidor

```bash
npm run dev
```

---

## 📡 Rotas Principais (Visão Geral)

* **Usuário**: criação de conta, autenticação
* **Receitas**: criação e listagem
* **Likes**: curtir/descurtir receitas
* **Favoritos**: favoritar/desfavoritar receitas
* **Comentários**: criar e deletar comentários

> As rotas estão organizadas dentro de `src/http/routes`

---

## 🧠 Observações Finais

Esse projeto foi pensado para ser **escalável**, **fácil de manter** e **didático**, servindo tanto como uma API real quanto como um ótimo projeto de portfólio.

Se quiser, dá pra evoluir fácil com:

* Upload de imagens das receitas 📸
* Sistema de seguidores 👥
* Paginação e busca 🔍
* Rate limit e cache ⚡

---

Feito com dedicação e café ☕🚀
