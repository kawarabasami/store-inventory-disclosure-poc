-- 商品名検索用ファンクション
DROP FUNCTION calc_count_products_by_category;
CREATE FUNCTION calc_count_products_by_category()
  RETURNS TABLE (
      product_category_id varchar
    , counts bigint
  ) AS $$
BEGIN
  RETURN QUERY
    select 
      p.product_category_id,
      count(pi.product_id) as counts
    from product_inventories pi
    inner join products p
    on pi.product_id = p.product_id
    where pi.amount > 0
    group by p.product_category_id
    order by p.product_category_id::integer
;

END;
$$ LANGUAGE plpgsql;