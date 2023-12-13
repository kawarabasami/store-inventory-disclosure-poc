import { supabase } from "@/utils/supabase/supabaseClient";

export async function saveQueryHistory(query: string) {
  const { error } = await supabase
    .from("search_query_history")
    .insert({ query });

  if (error) throw error;
  return;
}
