"use client";

import React, { useState } from "react";
import SearchIcon from "@/../../public/icons/search.svg";
import LoadingIcon from "@/../../public/icons/loading.svg";

interface Args {
  value: string;
  onChange: (value: string) => void;
  onSearch: (query: string) => void;
}

const SearchBox: React.FC<Args> = ({ value, onChange, onSearch }) => {
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    try {
      await onSearch(value);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="relative z-10 flex space-x-3 p-3 bg-white border rounded-lg shadow-lg shadow-gray-100 ">
        <div className="flex-[1_0_0%]">
          <label
            htmlFor="search-text"
            className="block text-sm text-gray-700 font-medium "
          >
            <span className="sr-only">商品名で検索</span>
          </label>
          <input
            type="text"
            id="search-text"
            className="p-3 block w-full border-transparent rounded-md focus:border-blue-500 focus:ring-blue-500 "
            placeholder="商品名で検索"
            value={value}
            onChange={(event) => {
              const value = event.target.value.trim();
              onChange(value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />
        </div>
        <button
          className="flex-[0_0_auto]"
          onClick={() => {
            handleSearch();
          }}
          disabled={loading}
          aria-label="検索"
        >
          <span className="p-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm">
            {!loading && <SearchIcon className="w-4 h-4" />}
            {loading && (
              <LoadingIcon className="w-4 h-4 text-gray-200 animate-spin fill-white" />
            )}
          </span>
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
