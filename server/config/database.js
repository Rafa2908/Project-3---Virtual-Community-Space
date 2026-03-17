import pg from "pg";
import "dotenv/config";

const { Client } = pg;

export const client = new Client({
  host: process.env.HOST,
  user: process.env.DBUSER,
  port: Number(process.env.DBPORT),
  password: "GQGycthkiwhG9odbX4egmHBSfnTSqDkL",
  database: process.env.DBNAME,
  ssl: { rejectUnauthorized: false },
});

try {
  await client.connect();
  console.log("✅ Connected to Render PostgreSQL");
} catch (err) {
  console.error("❌ Database connection failed:", err.message);
}
