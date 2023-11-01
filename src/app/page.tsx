/* eslint-disable @next/next/no-img-element */
import { supabase } from "@/utils/supabase/supabaseClient";
import IconifyWrapper from "./components/IconifyWrapper";
import SearchIcon from "@/../public/icons/search.svg";
import SearchBoxAccent1 from "@/../public/images/SearchBoxAccent1.svg";
import SearchBoxAccent2 from "@/../public/images/SearchBoxAccent2.svg";

export default async function Home() {
  const { data, error } = await supabase.from("product_categories").select();
  // prerine UIから参考
  // https://preline.co/examples/hero-forms.html
  return (
    <div className="relative overflow-hidden">
      <div className="max-w-none mx-auto py-5 sm:pt-6">
        <div className="text-center">
          <div className="bg-[url('/cropped-minna.jpg')] bg-top bg-cover h-36 sm:h-44 flex justify-center flex-col">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 ">
              ライフポイント
            </h1>
            <h2 className="title-font text-xl sm:text-2xl mt-4 font-medium text-orange-600">
              在庫検索システム
            </h2>
          </div>
          <p className="mt-8 text-gray-600 dark:text-gray-400">
            沖縄県恩納村唯一の建築資材店 <br />
            ライフポイントの在庫を検索できます
          </p>

          <div className="mt-8 sm:mt-16 mx-auto max-w-sm sm:max-w-xl relative">
            <form>
              <div className="relative z-10 flex space-x-3 p-3 bg-white border rounded-lg shadow-lg shadow-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:shadow-gray-900/[.2]">
                <div className="flex-[1_0_0%]">
                  <label
                    htmlFor="search-product-name"
                    className="block text-sm text-gray-700 font-medium dark:text-white"
                  >
                    <span className="sr-only">商品名で検索</span>
                  </label>
                  <input
                    type="text"
                    id="search-product-name"
                    className="p-3 block w-full border-transparent rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-400"
                    placeholder="商品名で検索"
                  />
                </div>
                <div className="flex-[0_0_auto]">
                  <a
                    className="p-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                    href="#"
                  >
                    <SearchIcon />
                  </a>
                </div>
              </div>
            </form>
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

          <h3 className="mt-10 text-lg sm:text-xl">取り扱い品目数</h3>
          <div className="mt-5">
            <div className="m-1 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
              <IconifyWrapper icon="material-symbols:hardware" />
              金物: 200点
            </div>
            <div className="m-1 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
              <IconifyWrapper icon="fluent:pipeline-24-filled" />
              水道資材: 200点
            </div>
            <div className="m-1 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
              <IconifyWrapper icon="tabler:wood" />
              木材: 200点
            </div>
            <div className="m-1 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
              <IconifyWrapper icon="healthicons:cleaning" />
              清掃道具: 200点
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
