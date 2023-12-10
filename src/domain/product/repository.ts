import { supabase } from "@/utils/supabase/supabaseClient";
import { Product } from "./types";
import { head } from "lodash";

const LIMIT = 1000;
const MAX_FETCH_COUNT = 10;

interface ProductRawData {
  product_id: string;
  product_name: string;
  product_category_id: string;
  product_category_name: string;
  quantity: number;
  updated_at: string | null;
}

function toPoduct(d: ProductRawData) {
  return {
    productId: d.product_id,
    productCategoryId: d.product_category_id,
    productCategoryName: d.product_category_name,
    productName: d.product_name,
    quantity: d.quantity,
    updatedAt: d.updated_at != null ? new Date(d.updated_at) : null,
  };
}

export async function searchProducts(query: string): Promise<Product[]> {
  const data: ProductRawData[] = [];
  for (let i = 0; i < MAX_FETCH_COUNT; i++) {
    const { data: d, error } = await supabase.rpc("search_products", {
      keyword: query,
    });
    if (error) throw error;
    data.push(...d);

    if (d.length < LIMIT) break;
  }
  const ret = data.map(toPoduct);

  return ret;
}

export async function fetchAllProducts(): Promise<Product[]> {
  const data: ProductRawData[] = [];
  for (let i = 0; i < MAX_FETCH_COUNT; i++) {
    const { data: d, error } = await supabase
      .rpc("fetch_all_products")
      .order("product_id")
      .range(i * LIMIT, (i + 1) * LIMIT);

    if (error) throw error;
    data.push(...d);

    if (d.length < LIMIT) break;
  }

  const ret = data.map(toPoduct);
  return ret;
}

export async function fetchProduct(productId: string): Promise<Product | null> {
  const { data, error } = await supabase.rpc("fetch_product", {
    target_product_id: productId,
  });

  data;
  if (error) throw error;

  if (data.length == 0) return null;
  const ret = data.map(toPoduct);

  return head(ret) ?? null;
}
