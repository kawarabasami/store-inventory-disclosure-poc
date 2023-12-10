/* eslint-disable @next/next/no-img-element */

import Header from "@/app/components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 via-transparent to-transparent pb-12 sm:pb-8 lg:pb-12 ">
      <Header />

      <div>{children}</div>
    </section>
  );
}
