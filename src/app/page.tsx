/* eslint-disable @next/next/no-img-element */
import SearchBoxAccent1 from "@/../public/images/SearchBoxAccent1.svg";
import SearchBoxAccent2 from "@/../public/images/SearchBoxAccent2.svg";
import SearchBoxTopPage from "./search/components/SearchBoxTopPage";
import CategoryCountBox from "./components/CategoryCountBox";
import {
  calcCountProductsByCategory,
  fetchAllCategories,
} from "@/domain/productCategory/repository";
import { format } from "date-fns";
import Head from "next/head";
import { getInventoriesLatestUpdatedAt } from "@/domain/product/repository";
import { Suspense } from "react";
import Loading from "./search/components/Loading";

function formatDate(date: Date | null) {
  if (date == null) return "";
  return `${format(date, "yyyy/MM/dd HH:mm")} 更新`;
}

export default async function Home() {
  const categories = await fetchAllCategories();
  const countsByCategory = await calcCountProductsByCategory();
  const updatedAt = await getInventoriesLatestUpdatedAt();

  // prerine UIから参考
  // https://preline.co/examples/hero-forms.html
  return (
    <Suspense fallback={<Loading />}>
      {/* TODO: Headタグ内が反映されない件調査 */}
      <Head>
        {/* LCPコンテンツのプリロード */}
        <link
          rel="preload"
          fetchPriority="high"
          as="image"
          href="/cropped-minna.webp"
          type="image/webp"
        />
      </Head>
      <div className="relative overflow-hidden pt-10">
        <div className="max-w-none mx-auto py-5 sm:pt-6">
          <div className="text-center">
            <div className="bg-[url('/cropped-minna.webp')] bg-top bg-cover h-48 flex justify-center flex-col items-center">
              <img src="/images/logo.webp" width={70} height={70} alt="logo" />
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 ">
                ライフポイント
              </h1>
              {/* </div> */}
              <h2 className="title-font text-xl sm:text-2xl my-4 font-medium text-orange-600">
                在庫検索システム
              </h2>
            </div>
            <p className="mt-8 text-gray-600 ">
              沖縄県恩納村唯一の建築資材店 <br />
              ライフポイントの在庫を検索できます
            </p>

            <div className="mt-8 sm:mt-16 mx-auto max-w-sm sm:max-w-xl relative">
              <SearchBoxTopPage />
              <div className="hidden md:block absolute top-0 right-0 -translate-y-12 translate-x-20">
                <SearchBoxAccent1
                  className="w-16 h-auto text-orange-500"
                  width="121"
                  height="135"
                  viewBox="0 0 121 135"
                  fill="none"
                />
              </div>

              <div className="hidden md:block absolute bottom-0 left-0 translate-y-10 -translate-x-32">
                <SearchBoxAccent2
                  className="w-40 h-auto text-cyan-500"
                  width="347"
                  height="188"
                  viewBox="0 0 347 188"
                  fill="none"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center items-center">
              <h3 className="mt-10 text-lg sm:text-xl">取り扱い品目数</h3>

              <p className="mt-2 text-sm text-gray-600 ">
                {formatDate(updatedAt)}
              </p>
              <div className="mt-5 sm:w-1/2">
                {countsByCategory.map((c, index) => {
                  const category = categories.find(
                    (cate) => cate.productCategoryId === c.productCategoryId
                  );
                  if (category == null)
                    throw new Error("category can not find.");
                  return (
                    <CategoryCountBox
                      key={index}
                      countInfo={c}
                      category={category}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
}
