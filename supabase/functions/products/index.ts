import * as postgres from "https://deno.land/x/postgres@v0.17.0/mod.ts";
import { postProducts } from "./post.ts";

// Get the connection string from the environment variable "SUPABASE_DB_URL"
const databaseUrl = Deno.env.get("SUPABASE_DB_URL")!;

// Create a database pool with three connections that are lazily established
const pool = new postgres.Pool(databaseUrl, 3, true);

Deno.serve(async (req) => {
  // 作っていないメソッドによるリクエストは弾く
  if (req.method !== "POST") {
    return new Response(null, { status: 405 });
  }

  return await postProducts(req, pool);
});
