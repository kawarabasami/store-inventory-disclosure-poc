import * as postgres from "https://deno.land/x/postgres@v0.17.0/mod.ts";
import { Product } from "../../domain/product/types.ts";
import {
  makeArgs,
  makeValuesStringPlaceholders,
} from "../../utils/sqlUtils.ts";

// Get the connection string from the environment variable "SUPABASE_DB_URL"
const databaseUrl = Deno.env.get("SUPABASE_DB_URL")!;

// Create a database pool with three connections that are lazily established
const pool = new postgres.Pool(databaseUrl, 3, true);

Deno.serve(async (req) => {
  const inputs = (await req.json()) as Product[];

  try {
    // Grab a connection from the pool
    const connection = await pool.connect();

    const query = `
    INSERT INTO products 
      (product_id, product_category_id, product_name)
    VALUES
      ${makeValuesStringPlaceholders(inputs.length, 3)}
    ON CONFLICT (product_id)
    DO UPDATE SET
      product_category_id = excluded.product_category_id
    , product_name = excluded.product_name;
  `;
    console.log(query);

    try {
      // Run a query
      const result = await connection.queryArray({
        text: query,
        args: makeArgs(inputs, [
          "productId",
          "productCategoryId",
          "productName",
        ]),
      });

      // Encode the result as pretty printed JSON
      const body = JSON.stringify({ result });

      // Return the response with the correct content type header
      return new Response(body, {
        status: 200,
        headers: { "Content-Type": "application/json; charset=utf-8" },
      });
    } finally {
      // Release the connection back into the pool
      connection.release();
    }
  } catch (err) {
    console.error(err);
    return new Response(String(err?.message ?? err), { status: 500 });
  }
});
