"use client";

import React, { Suspense, useCallback, useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import SearchBox from "@/app/components/SearchBox";
import Loading from "./Loading";

const SearchBoxTopPage = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [query, setQuery] = useState("");

  const SearchParamsComponent = () => {
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
    );
  };

  return (
    <Suspense fallback={<Loading />}>
      <SearchParamsComponent />
    </Suspense>
  );
};

export default SearchBoxTopPage;
