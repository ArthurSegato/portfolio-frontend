import { sql } from "@vercel/postgres";

export default defineEventHandler(async (event) => {
  try {
    const { rows } =
      await sql`SELECT id, name, description, card FROM "Project" ORDER BY id DESC;`;
    return rows;
  } catch (error) {
    return error;
  }
});
