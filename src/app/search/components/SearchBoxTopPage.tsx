"use client";

import React, { useCallback, useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import SearchBox from "@/app/components/SearchBox";

const SearchBoxTopPage = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [query, setQuery] = useState("");
  const searchParams = useSearchParams();

  useEffect(() => {
    setQuery(searchParams.get("q") ?? "");
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
      <SearchBox
        value={query}
        onChange={(value) => {
          // 値取得
          setQuery(value);

          // historyに残らないよう、replaceを使ってURL書き換え
          router.replace(`${pathname}${createQueryParam("q", value)}`);
        }}
        onSearch={(query) => {
          if (!query) return; // 未入力の場合何もしない
          router.push(`/search${createQueryParam("q", query)}`, {
            scroll: false,
          });
        }}
      />
    </div>
  );
};

export default SearchBoxTopPage;
