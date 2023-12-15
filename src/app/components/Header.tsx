/* eslint-disable @next/next/no-img-element */
import React from "react";

function Header() {
  return (
    <>
      <link
        key="preload-minna"
        rel="preload"
        fetchPriority="high"
        as="image"
        href="/cropped-minna.webp"
        type="image/webp"
      />
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8 bg-[url('/cropped-minna.webp')] bg-top bg-cover ">
        <header className="flex items-center justify-center py-4 ">
          {/* logo - start */}
          <a
            href="/"
            className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl"
            aria-label="logo"
          >
            <img src="/images/logo.webp" width={95} height={94} alt="logo" />
            <div className="flex flex-col gap-0">
              <span className="text-2xl">ライフポイント</span>
              <span className="text-base text-orange-600">
                - 在庫検索システム -
              </span>
            </div>
          </a>
          {/* logo - end */}
        </header>
      </div>
    </>
  );
}

export default Header;
