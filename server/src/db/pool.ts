import pg from "pg";
import { env } from "../env.js";

const isLocalDb = env.DATABASE_URL.includes("localhost") || env.DATABASE_URL.includes("127.0.0.1");

export const pool = new pg.Pool({
  connectionString: env.DATABASE_URL,
  ssl: isLocalDb ? undefined : { rejectUnauthorized: false },
});
