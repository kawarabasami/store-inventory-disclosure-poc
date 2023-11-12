-- 商品情報取得用ファンクション
DROP FUNCTION fetch_product;
CREATE FUNCTION fetch_product(target_product_id varchar)
  RETURNS TABLE (
      product_id varchar
    , product_name varchar
    , product_category_id varchar
    , product_category_name varchar
    , amount bigint
    , updated_at timestamp with time zone
  ) AS $$
BEGIN
  RETURN QUERY
    select
        p.product_id
      , p.product_name
      , p.product_category_id
      , pc.product_category_name
      , pi.amount
      , pi.updated_at
    from products p
    inner join product_categories pc
    on p.product_category_id = pc.product_category_id
    left join product_inventories pi
    on p.product_id = pi.product_id
    where p.product_id = target_product_id;
END;
$$ LANGUAGE plpgsql;