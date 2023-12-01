-- 商品カテゴリ別品目数算出ファンクション
DROP FUNCTION if exists calc_count_products_by_category;
CREATE FUNCTION calc_count_products_by_category()
  RETURNS TABLE (
      product_category_id varchar
    , counts integer
  ) AS $$
BEGIN
  RETURN QUERY
    select 
      p.product_category_id,
      count(pi.product_id)::integer as counts
    from product_inventories pi
    inner join products p
    on pi.product_id = p.product_id
    where pi.quantity > 0
    group by p.product_category_id
    order by p.product_category_id
;

END;
$$ LANGUAGE plpgsql;