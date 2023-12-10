import { supabase } from "@/utils/supabase/supabaseClient";
import { CountProductsByCategory, ProductCategory } from "./types";

export async function fetchAllCategories(): Promise<ProductCategory[]> {
  const { data, error } = await supabase.from("product_categories").select();

  if (error) throw error;
  return data.map((d) => {
    return {
      productCategoryId: d.product_category_id,
      productCategoryName: d.product_category_name,
      iconId: d.icon_id,
      iconColor: d.icon_color,
      iconBgColor: d.icon_bg_color,
    };
  });
}

export async function calcCountProductsByCategory(): Promise<
  CountProductsByCategory[]
> {
  const { data, error } = await supabase.rpc("calc_count_products_by_category");

  if (error) throw error;
  return data.map((d) => {
    return {
      productCategoryId: d.product_category_id,
      countProducts: d.counts,
    };
  });
}
