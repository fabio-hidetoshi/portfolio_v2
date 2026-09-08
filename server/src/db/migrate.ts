import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { pool } from "./pool.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function migrate() {
  const sql = readFileSync(path.join(__dirname, "migrations", "001_init.sql"), "utf-8");
  await pool.query(sql);
  console.log("Migrations aplicadas com sucesso.");
  await pool.end();
}

migrate().catch((err) => {
  console.error("Falha ao rodar migrations:", err);
  process.exit(1);
});
