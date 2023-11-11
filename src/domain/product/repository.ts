import { supabase } from "@/utils/supabase/supabaseClient";
import { Product } from "./types";

export async function searchProducts(query: string): Promise<Product[]> {
  const { data, error } = await supabase.rpc("search_product_name", {
    keyword: query,
  });

  if (error) throw error;

  if (data == null) return [];
  const ret = data.map((d) => {
    return {
      productId: d.product_id,
      productCategoryId: d.product_category_id,
      productCategoryName: d.product_category_name,
      productName: d.product_name,
      amount: d.amount,
      updatedAt: d.updated_at != null ? new Date(d.updated_at) : null,
    };
  });

  return ret;
}
