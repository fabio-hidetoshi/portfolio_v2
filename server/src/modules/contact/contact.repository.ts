import { pool } from "../../db/pool.js";
import type { ContactInput } from "./contact.validation.js";

export async function insertContactMessage(input: ContactInput, ipHash: string | null) {
  const result = await pool.query<{ id: number }>(
    `INSERT INTO contact_messages (name, email, message, locale, ip_hash)
     VALUES ($1, $2, $3, $4, $5)
     RETURNING id`,
    [input.name, input.email, input.message, input.locale, ipHash]
  );
  return result.rows[0].id;
}

export async function markContactStatus(id: number, status: "emailed" | "failed") {
  await pool.query("UPDATE contact_messages SET status = $1 WHERE id = $2", [status, id]);
}
