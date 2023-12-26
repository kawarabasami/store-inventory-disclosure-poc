-- 商品在庫最終更新日時取得
DROP FUNCTION if exists get_product_inventries_latest_updated_at;
CREATE FUNCTION get_product_inventries_latest_updated_at()
  RETURNS TABLE (
      latest_updated_at timestamp with time zone
  ) AS $$
BEGIN
  RETURN QUERY
    select max(updated_at) from product_inventories;
END;
$$ LANGUAGE plpgsql;