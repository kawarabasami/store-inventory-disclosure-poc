"use client";

import React, { useCallback, useEffect, useState } from "react";
import SearchIcon from "@/../../public/icons/search.svg";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const SearchBox = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [searchText, setSearchText] = useState("");
  const searchParams = useSearchParams();

  useEffect(() => {
    setSearchText(searchParams.get("q") ?? "");
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
    <div>
      <div className="relative z-10 flex space-x-3 p-3 bg-white border rounded-lg shadow-lg shadow-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:shadow-gray-900/[.2]">
        <div className="flex-[1_0_0%]">
          <label
            htmlFor="search-text"
            className="block text-sm text-gray-700 font-medium dark:text-white"
          >
            <span className="sr-only">商品名で検索</span>
          </label>
          <input
            type="text"
            id="search-text"
            value={searchText}
            onChange={(event) => {
              // 値取得
              const value = event.target.value.trim();
              setSearchText(value);

              // historyに残らないよう、replaceを使ってURL書き換え
              router.replace(`${pathname}${createQueryParam("q", value)}`);
            }}
            className="p-3 block w-full border-transparent rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-400"
            placeholder="商品名で検索"
          />
        </div>
        <button
          className="flex-[0_0_auto]"
          onClick={(event) => {
            if (!searchText) return; // 未入力の場合何もしない
            router.push(`/search${createQueryParam("q", searchText)}`, {
              scroll: false,
            });
          }}
        >
          <span className="p-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
            <SearchIcon />
          </span>
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
