import { Pool } from "https://deno.land/x/postgres@v0.17.0/mod.ts";
import {
  makeArgs,
  makeValuesStringPlaceholders,
} from "../../utils/sqlUtils.ts";
import { ProductInventoryPayload } from "../../domain/productInventory/types.ts";

interface ReqData {
  productInventories: ProductInventoryPayload[];
}

export async function postProductInventories(req: Request, pool: Pool) {
  console.log(req);

  const bodyText = await req.text();
  console.log(bodyText, "bodyText");

  const reqData = JSON.parse(bodyText) as ReqData;
  const inventories = reqData.productInventories.map((p) => ({
    ...p,
    quantity: Number(p.quantity),
  }));
  const filteredInv = inventories.filter((i) => i.quantity >= 0);

  try {
    // Grab a connection from the pool
    const connection = await pool.connect();
    const query = `
    with InsertData(product_id, quantity) as (
      values ${makeValuesStringPlaceholders(filteredInv.length, 2)}
    ), CheckedData as (
      select product_id, quantity::integer
      from InsertData d
      where EXISTS 
        (select * from products p where d.product_id = p.product_id)
    )
    INSERT INTO product_inventories 
      (product_id, quantity, updated_at)
      select product_id, quantity, current_timestamp as updated_at from CheckedData
    ON CONFLICT (product_id)
    DO UPDATE SET
      quantity = excluded.quantity::integer
      , updated_at = excluded.updated_at
    RETURNING product_id;
  `;
    const args = makeArgs(filteredInv, ["productId", "quantity"]);

    console.log(query);
    console.log(args);

    try {
      // Run a query
      const result = await connection.queryArray({
        text: query,
        args,
      });

      console.log(result);
      // Encode the result as pretty printed JSON
      const body = JSON.stringify({ registerd: result.rows });

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
}
