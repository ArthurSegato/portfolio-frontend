// import { sql } from "@vercel/postgres";

export default defineEventHandler(async (event) => {
  try {
    return {
      message: "ok",
    };
    // const { rows } =
    //   await sql`SELECT id, name, description, card FROM "Project" ORDER BY id DESC;`;
    // return rows;
  } catch (error) {
    return error;
  }
});
