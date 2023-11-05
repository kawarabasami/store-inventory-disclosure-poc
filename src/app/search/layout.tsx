/* eslint-disable @next/next/no-img-element */

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ライフポイント 在庫検索",
  description:
    "沖縄県恩納村唯一の建築資材店 ライフポイントの在庫を検索できます",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 via-transparent to-transparent pb-12 sm:pb-8 lg:pb-12 ">
      <div className="lg:pb-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <header className="flex items-center justify-between py-4 md:py-8">
            {/* logo - start */}
            <a
              href="/"
              className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl"
              aria-label="logo"
            >
              <img src="/images/logo.png" width={95} height={94} alt="logo" />
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
      </div>

      <div>{children}</div>
    </section>
  );
}
