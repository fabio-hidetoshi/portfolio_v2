<div align="center">

# fabio.dev

### Portfólio pessoal de Fábio Hidetoshi — Software Developer & AI Engineer

[![React](https://img.shields.io/badge/React-19-149eca?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Node.js](https://img.shields.io/badge/Node.js-24-339933?logo=node.js&logoColor=white)](https://nodejs.org)
[![Express](https://img.shields.io/badge/Express-4-000000?logo=express&logoColor=white)](https://expressjs.com)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Supabase-336791?logo=postgresql&logoColor=white)](https://supabase.com)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06b6d4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

[LinkedIn](https://www.linkedin.com/in/fabio-hidetoshi) · [GitHub](https://github.com/fabio-hidetoshi) · [E-mail](mailto:fhaperes@gmail.com)

</div>

<br />

<p align="center">
  <img src="docs/screenshots/hero-light.png" width="49%" alt="Home — tema claro" />
  <img src="docs/screenshots/hero-dark.png" width="49%" alt="Home — tema escuro" />
</p>

## Sobre o projeto

Portfólio full-stack construído do zero: **React** no front-end e **Node.js/Express + PostgreSQL** no back-end. Todo o conteúdo (experiências, skills e projetos) vem de uma API própria, não está hardcoded — o site é dinâmico de verdade.

- 🌗 **Tema claro/escuro** com persistência local
- 🌐 **PT/EN** via i18next, com conteúdo bilíngue vindo do banco
- ⚙️ **API REST própria** (Express + PostgreSQL) servindo projetos, experiências e skills
- ✉️ **Formulário de contato funcional**, com validação, persistência e envio de e-mail
- 🎨 Identidade visual editorial própria — tipografia serifada + monoespaçada, sem "cara de template"

## Capturas de tela

<p align="center">
  <img src="docs/screenshots/project-detail.png" width="80%" alt="Página de detalhe de um projeto" />
</p>

<details>
<summary><strong>Ver mais telas</strong> (idioma em inglês, página completa)</summary>
<br />

<p align="center">
  <img src="docs/screenshots/hero-en.png" width="80%" alt="Home em inglês" />
</p>
<p align="center">
  <img src="docs/screenshots/full-page-light.png" width="80%" alt="Página completa" />
</p>

</details>

## Stack

| Camada | Tecnologias |
|---|---|
| **Front-end** | React 19, TypeScript, Vite, Tailwind CSS 4, React Router, i18next |
| **Back-end** | Node.js, Express, TypeScript, Zod, Resend |
| **Banco de dados** | PostgreSQL (Supabase) |
| **Deploy** | Vercel (front) · Render/Railway (back) |

## Estrutura

```
portfolio/
├── client/    # front-end React (Vite + TS + Tailwind)
└── server/    # API REST (Express + TS + PostgreSQL)
```

## Rodando localmente

> Este projeto é dinâmico (dados vêm de um banco Postgres), então rodar localmente exige um banco configurado — os prints acima já mostram o resultado final sem precisar rodar nada.

1. Copie os arquivos de ambiente:
   ```bash
   cp server/.env.example server/.env
   cp client/.env.example client/.env
   ```
2. Preencha `server/.env` com a `DATABASE_URL` do seu banco Postgres (Supabase/Neon).
3. Instale as dependências (na raiz do monorepo):
   ```bash
   npm install
   ```
4. Rode as migrations e o seed:
   ```bash
   npm run db:migrate
   npm run db:seed
   ```
5. Suba client e server juntos:
   ```bash
   npm run dev
   ```
   - Client: http://localhost:5173
   - Server: http://localhost:4000

## Deploy

- **Client**: Vercel (root directory `client/`, framework Vite).
- **Server**: Render ou Railway (root directory `server/`, build `npm run build`, start `npm run start`).
- **Banco**: Supabase ou Neon (Postgres gerenciado).

---

<div align="center">

Feito por [Fábio Hidetoshi](https://github.com/fabio-hidetoshi)

</div>
