# Portfólio — Fábio Hidetoshi

Portfólio pessoal full-stack: React (Vite + TypeScript + Tailwind) no front-end e Node.js (Express + PostgreSQL) no back-end, com i18n PT/EN e formulário de contato.

## Estrutura

- `client/` — front-end React
- `server/` — API REST em Node.js/Express + PostgreSQL

## Rodando localmente

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
