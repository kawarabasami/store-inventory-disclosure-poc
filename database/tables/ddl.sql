-- product_categories
-- drop table if exists public.product_categories;
create table
  public.product_categories (
    product_category_id character varying not null,
    product_category_name character varying not null,
    icon_id character varying not null,
    icon_color character varying not null default '#666'::character varying,
    icon_bg_color character varying not null default '#EEE'::character varying,
    constraint product_categories_pkey primary key (product_category_id)
  ) tablespace pg_default;

-- products
-- drop table if exists public.products;
create table
  public.products (
    product_id character varying not null,
    product_name character varying not null,
    product_category_id character varying not null,
    constraint products_pkey primary key (product_id),
    constraint products_product_category_id_fkey foreign key (product_category_id) references product_categories (product_category_id)
  ) tablespace pg_default;

create index if not exists products_product_name_search_index on public.products using pgroonga (product_name)
with
  (
    normalizers = 'NormalizerNFKC150(
    "unify_kana", true,
    "unify_kana_case", true,
    "unify_kana_voiced_sound_mark", true,
    "unify_hyphen", true,
    "unify_prolonged_sound_mark", true,
    "unify_hyphen_and_prolonged_sound_mark", true,
    "unify_middle_dot", true,
    "unify_katakana_v_sounds", true,
    "unify_katakana_bu_sound", true,
    "unify_to_romaji", true,
    "unify_katakana_gu_small_sounds", true,
    "unify_katakana_di_sound", true,
    "unify_katakana_wo_sound", true,
    "unify_katakana_zu_small_sounds", true,
    "unify_katakana_du_sound", true,
    "unify_katakana_trailing_o", true,
    "unify_katakana_du_small_sounds", true,
    "unify_kana_prolonged_sound_mark", true,
    "unify_kana_hyphen", true
   )',
    tokenizer = 'TokenNgram(
    "unify_alphabet", false,
    "unify_symbol", false,
    "unify_digit", false,
    "report_source_location", true
  )'
  ) tablespace pg_default;

-- product_inventories
-- drop table if exists public.product_inventories;
create table
  public.product_inventories (
    product_id character varying not null,
    quantity integer not null,
    updated_at timestamp with time zone not null default now(),
    constraint product_inventories_pkey primary key (product_id),
    constraint product_inventories_product_id_fkey foreign key (product_id) references products (product_id)
  ) tablespace pg_default;

-- search_query_history
-- drop table if exists public.search_query_history;
create table search_query_history (
  id serial not null,
  query character varying not null,
  created_at timestamp with time zone not null default now(),
  primary key (id)
) tablespace pg_default;