import { supabase } from "@/utils/supabase/supabaseClient";
import { Product } from "./types";

export async function searchProducts(query: string): Promise<Product[]> {
  // TODO: product_inventoriesが配列判定されているのをオブジェクト判定にしたい
  const { data, error } = await supabase
    .from("products")
    .select(
      `
      product_name,
      product_id,
      product_categories (
        product_category_id,
        product_category_name
      ),
      product_inventories (
        amount,
        updated_at
      )`
    )
    .like("product_name", `%${query}%`);

  if (error) throw error;

  if (data == null) return [];
  const ret = data
    .filter(
      // 結合先の値が無い場合、返却対象から除外
      (d) =>
        d.product_categories != null &&
        d.product_inventories != null &&
        d.product_inventories.length !== 1
    )
    .map((d) => {
      return {
        productId: d.product_id,
        productCategoryId: d.product_categories?.product_category_id!,
        productCategoryName: d.product_categories?.product_category_name!,
        productName: d.product_name,
        amount: (d.product_inventories as any).amount, // product_inventoriesが配列扱いになっているため、一旦anyで逃げる
        updatedAt: new Date((d.product_inventories as any).updated_at), // product_inventoriesが配列扱いになっているため、一旦anyで逃げる
      };
    });

  return ret;
}
