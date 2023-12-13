"use client";

/* eslint-disable @next/next/no-img-element */
import { searchProducts } from "@/domain/product/repository";
import ProductView from "./components/ProductView";
import { fetchAllCategories } from "@/domain/productCategory/repository";
import { ICON_OTHER } from "@/domain/productCategory/constants";
import { useCallback, useEffect, useState } from "react";
import { Product } from "@/domain/product/types";
import { ProductCategory } from "@/domain/productCategory/types";
import SearchBox from "../components/SearchBox";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Loading from "./components/Loading";
import { saveQueryHistory } from "@/domain/searchQueryHistory/repository";

export default function Search() {
  // Flowriftから参考
  // https://flowrift.com/c/shopping-cart/1DPLi?view=preview

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [searchText, setSearchText] = useState("");
  const [result, setResult] = useState<Product[]>([]);
  const [categories, setCategories] = useState<ProductCategory[]>([]);
  const [loading, setLoading] = useState(false);

  const init = async () => {
    // カテゴリ情報(アイコンなど)の取得
    setCategories(await fetchAllCategories());
  };
  const search = async (value: string) => {
    // 商品情報検索
    setLoading(true);
    setResult(await searchProducts(value));
    setLoading(false);

    // 検索履歴を残す
    saveQueryHistory(value);
  };

  // 初期処理
  useEffect(() => {
    const q = searchParams.get("q") ?? "";
    setSearchText(q);
    init();
    search(q); // クエリ文言を元に検索
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const createQueryParam = useCallback(
    (name: string, value: string) => {
      if (!value) return "";

      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return `?${params.toString()}`;
    },
    [searchParams]
  );

  return (
    <div className="py-6 ">
      <div className="mx-auto max-w-screen-lg px-4 md:px-8">
        <div className="mb-3 sm:mb-5 lg:mb-8">
          <SearchBox
            value={searchText}
            onChange={(value) => {
              // 値取得
              setSearchText(value);
            }}
            onSearch={(query) => {
              if (!query) return; // 未入力の場合何もしない

              // 検索処理実行
              setSearchText(query);
              search(query);

              // historyに残らないよう、replaceを使ってURL書き換え
              router.replace(`${pathname}${createQueryParam("q", query)}`);
            }}
          />

          <div className="flex mt-8 mb-2 md:mb-6 items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
              検索結果
            </h2>
            {!loading && <span>件数: {result.length}件</span>}
          </div>
        </div>
        {loading && <Loading />}
        {!loading && (
          <div className="mb-5 flex flex-col sm:mb-8 sm:divide-y border-t border-b">
            {result.map((r, index) => {
              const category = categories.find(
                (c) => c.productCategoryId === r.productCategoryId
              );

              const icon =
                category != null
                  ? {
                      id: category.iconId,
                      color: category.iconColor,
                      bgColor: category.iconBgColor,
                    }
                  : ICON_OTHER;

              return <ProductView key={index} product={r} icon={icon} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}
