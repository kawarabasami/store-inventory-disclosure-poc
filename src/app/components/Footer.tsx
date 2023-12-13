import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="bg-white pt-4 sm:pt-10 lg:pt-12">
      <footer className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="flex flex-col items-center justify-end gap-4 border-t border-b py-6 md:flex-row">
          {/* nav - start */}
          <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 md:justify-start md:gap-6">
            <Link
              href="https://lifepoint-okinawa.com/"
              target="_blank"
              className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
            >
              ライフポイント 公式サイト
            </Link>
          </nav>
          {/* nav - end */}
        </div>
        <div className="py-8 text-center text-sm text-gray-400">
          © 2023 - リフォームのライフポイント All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Footer;
