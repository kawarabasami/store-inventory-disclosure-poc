/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    // <div className="bg-white pt-4 sm:pt-10 lg:pt-12">
    //   <footer className="mx-auto max-w-screen-2xl px-4 md:px-8">
    //     <div className="flex flex-col items-center justify-end gap-4 border-t border-b py-6 md:flex-row">
    //       {/* nav - start */}
    //       <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 md:justify-start md:gap-6">
    //         <Link
    //           href="https://lifepoint-okinawa.com/"
    //           target="_blank"
    //           className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
    //         >
    //           ライフポイント 公式サイト
    //         </Link>
    //       </nav>
    //       {/* nav - end */}
    //     </div>
    //     <div className="py-8 text-center text-sm text-gray-400">
    //       © 2023 - リフォームのライフポイント All rights reserved.
    //     </div>
    //   </footer>
    // </div>
    <div className="pt-4 sm:pt-10 lg:pt-12 border-t">
      <footer className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-xl font-bold text-black md:text-2xl"
            aria-label="logo"
          >
            ライフポイント
          </a>
        </div>
        <div className="flex flex-col md:flex-row justify-between text-gray-500 gap-3">
          <div className="flex flex-col md:flex-row gap-3">
            <p className="sm:pr-8 text-left">
              〒904-0411
              <br />
              沖縄県国頭郡恩納村字恩納6084
              <br />
              EPD合同会社
            </p>
            <p>
              <Link
                href="https://lifepoint-okinawa.com/"
                target="_blank"
                className=" transition duration-100 hover:text-indigo-500 active:text-indigo-600"
              >
                公式Webサイト <br />
                https://lifepoint-okinawa.com/
              </Link>
              <br />
              <a
                href="tel:098-966-2125"
                className="hover:text-indigo-500 active:text-indigo-600"
              >
                TEL: 098-966-2125
              </a>
            </p>
          </div>

          <div className="text-xs">
            表示されている在庫数は最新でない場合があります。
            <br />
            正確な在庫数を知りたい場合は
            <br />
            店舗までお電話にてお問い合わせください。
          </div>
        </div>

        <div className="py-8 text-center text-sm text-gray-400">
          © 2023 - リフォームのライフポイント All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Footer;
