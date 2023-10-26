import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="ja">
      <body className={inter.className}>
        <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 via-transparent to-transparent pb-12 pt-10 sm:pb-8 sm:pt-16 lg:pb-12 xl:pb-16 xl:pt-20">
          {children}
        </section>
      </body>
    </html>
  );
}
