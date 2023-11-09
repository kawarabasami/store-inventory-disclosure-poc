"use client";

import React from "react";
import SearchIcon from "@/../../public/icons/search.svg";

interface Args {
  value: string;
  onChange: (value: string) => void;
  onSearch: (query: string) => void;
}

const SearchBox: React.FC<Args> = ({ value, onChange, onSearch }) => {
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
            className="p-3 block w-full border-transparent rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-400"
            placeholder="商品名で検索"
            value={value}
            onChange={(event) => {
              const value = event.target.value.trim();
              onChange(value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onSearch(value);
              }
            }}
          />
        </div>
        <button
          className="flex-[0_0_auto]"
          onClick={() => {
            onSearch(value);
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
