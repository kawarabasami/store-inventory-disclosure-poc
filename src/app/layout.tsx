import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./components/Footer";

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
        <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 via-transparent to-transparent pb-12 sm:pb-8 lg:pb-12 min-h-screen">
          {children}
        </section>
        <Footer />
      </body>
    </html>
  );
}
