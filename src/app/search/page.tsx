"use client";

/* eslint-disable @next/next/no-img-element */
import { searchProducts } from "@/domain/product/repository";
import SearchBox from "../components/SearchBox";
import ProductView from "./components/ProductView";
import { fetchAllCategories } from "@/domain/productCategory/repository";
import { ICON_OTHER } from "@/domain/productCategory/constants";
import { useEffect, useState } from "react";
import { Product } from "@/domain/product/types";
import { ProductCategory } from "@/domain/productCategory/types";

export default function Home() {
  // Flowriftから参考
  // https://flowrift.com/c/shopping-cart/1DPLi?view=preview

  const [result, setResult] = useState<Product[]>([]);
  const [categories, setCategories] = useState<ProductCategory[]>([]);

  const init = async () => {
    setCategories(await fetchAllCategories());
  };
  const search = async () => {
    setResult(await searchProducts("マキタ"));
  };

  useEffect(() => {
    init();
    search();
  }, []);

  return (
    <div className="py-6 ">
      <div className="mx-auto max-w-screen-lg px-4 md:px-8">
        <div className="mb-3 sm:mb-5 lg:mb-8">
          <SearchBox />

          <div className="flex mt-8 mb-2 md:mb-6 items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
              検索結果
            </h2>
            <span>件数: 3件</span>
          </div>
        </div>
        <div className="mb-5 flex flex-col sm:mb-8 sm:divide-y border-t border-b">
          {result.map((r, index) => {
            const category = categories.find(
              (c) => c.productCategoryId === r.productCategoryId
            );

            const icon =
              category != null
                ? {
                    id: category.iconId,
                    color: category.iconColor,
                    bgColor: category.iconBgColor,
                  }
                : ICON_OTHER;

            return <ProductView key={index} product={r} icon={icon} />;
          })}

          <ProductView
            product={{
              productId: "9841000000363",
              productCategoryId: "00006",
              productCategoryName: "金物",
              productName: "普通釘 4kg N45",
              amount: 15,
              updatedAt: new Date(),
            }}
            icon={{
              id: "material-symbols:hardware",
              color: "#666",
              bgColor: "#EEE",
            }}
          />
          <ProductView
            product={{
              productId: "4525796140014",
              productCategoryId: "00006",
              productCategoryName: "金物",
              productName:
                "フジテック・ジャパン:ゴムキャスター自在φ25 プレート式 14001",
              amount: 5,
              updatedAt: new Date(),
            }}
            icon={{
              id: "material-symbols:hardware",
              color: "#666",
              bgColor: "#EEE",
            }}
          />
          <ProductView
            product={{
              productId: "9841000000363",
              productCategoryId: "00006",
              productCategoryName: "水道資材",
              productName: "グレーポリサドル　VP40",
              amount: 3,
              updatedAt: new Date(),
            }}
            icon={{
              id: "fluent:pipeline-24-filled",
              color: "#4169e1",
              bgColor: "#f0f8ff",
            }}
          />
          <ProductView
            product={{
              productId: "9841000000604",
              productCategoryId: "00006",
              productCategoryName: "木材",
              productName: "ベニヤ　4分 12.0×920×1830 3×6",
              amount: 15,
              updatedAt: new Date(),
            }}
            icon={{
              id: "tabler:wood",
              color: "#8b4513",
              bgColor: "#f5deb3",
            }}
          />
          <ProductView
            product={{
              productId: "4903206020611",
              productCategoryId: "00006",
              productCategoryName: "清掃道具",
              productName: "アタリヤデッキブラシ",
              amount: 15,
              updatedAt: new Date(),
            }}
            icon={{
              id: "healthicons:cleaning",
              color: "#008000",
              bgColor: "#fff8dc",
            }}
          />
          <ProductView
            product={{
              productId: "4903206020611",
              productCategoryId: "00006",
              productCategoryName: "清掃道具",
              productName: "アタリヤデッキブラシ",
              amount: 15,
              updatedAt: new Date(),
            }}
            icon={{
              id: "icons8:electrical",
              color: "#e67300",
              bgColor: "#EEE",
            }}
          />
          <ProductView
            product={{
              productId: "4903206020611",
              productCategoryId: "00006",
              productCategoryName: "清掃道具",
              productName: "アタリヤデッキブラシ",
              amount: 15,
              updatedAt: new Date(),
            }}
            icon={{
              id: "fluent-emoji-high-contrast:rock",
              color: "#696969",
              bgColor: "#EEE",
            }}
          />
          <ProductView
            product={{
              productId: "4903206020611",
              productCategoryId: "00006",
              productCategoryName: "清掃道具",
              productName: "アタリヤデッキブラシ",
              amount: 15,
              updatedAt: new Date(),
            }}
            icon={{
              id: "bi:paint-bucket",
              color: "#4169e1",
              bgColor: "#EEE",
            }}
          />
          <ProductView
            product={{
              productId: "4903206020611",
              productCategoryId: "00006",
              productCategoryName: "清掃道具",
              productName: "アタリヤデッキブラシ",
              amount: 15,
              updatedAt: new Date(),
            }}
            icon={{
              id: "game-icons:metal-bar",
              color: "#696969",
              bgColor: "#EEE",
            }}
          />
          <ProductView
            product={{
              productId: "4903206020611",
              productCategoryId: "00006",
              productCategoryName: "清掃道具",
              productName: "アタリヤデッキブラシ",
              amount: 15,
              updatedAt: new Date(),
            }}
            icon={{
              id: "game-icons:nails",
              color: "#696969",
              bgColor: "#EEE",
            }}
          />
          <ProductView
            product={{
              productId: "4903206020611",
              productCategoryId: "00006",
              productCategoryName: "清掃道具",
              productName: "アタリヤデッキブラシ",
              amount: 15,
              updatedAt: new Date(),
            }}
            icon={{
              id: "jam:cutter",
              color: "#696969",
              bgColor: "#EEE",
            }}
          />
          <ProductView
            product={{
              productId: "4903206020611",
              productCategoryId: "00006",
              productCategoryName: "清掃道具",
              productName: "アタリヤデッキブラシ",
              amount: 15,
              updatedAt: new Date(),
            }}
            icon={{
              id: "game-icons:swap-bag",
              color: "#bc8f8f",
              bgColor: "#EEE",
            }}
          />
          <ProductView
            product={{
              productId: "4903206020611",
              productCategoryId: "00006",
              productCategoryName: "清掃道具",
              productName: "アタリヤデッキブラシ",
              amount: 15,
              updatedAt: new Date(),
            }}
            icon={{
              id: "la:tape",
              color: "#da70d6",
              bgColor: "#EEE",
            }}
          />
          <ProductView
            product={{
              productId: "4903206020611",
              productCategoryId: "00006",
              productCategoryName: "清掃道具",
              productName: "アタリヤデッキブラシ",
              amount: 15,
              updatedAt: new Date(),
            }}
            icon={{
              id: "material-symbols:tools-phillips",
              color: "#da70d6",
              bgColor: "#EEE",
            }}
          />
          <ProductView
            product={{
              productId: "4903206020611",
              productCategoryId: "00006",
              productCategoryName: "清掃道具",
              productName: "アタリヤデッキブラシ",
              amount: 15,
              updatedAt: new Date(),
            }}
            icon={{
              id: "eos-icons:pipeline",
              color: "#4169e1",
              bgColor: "#f0f8ff",
            }}
          />
          <ProductView
            product={{
              productId: "4903206020611",
              productCategoryId: "00006",
              productCategoryName: "清掃道具",
              productName: "アタリヤデッキブラシ",
              amount: 15,
              updatedAt: new Date(),
            }}
            icon={{
              id: "mdi:faucet",
              color: "#4169e1",
              bgColor: "#f0f8ff",
            }}
          />
          <ProductView
            product={{
              productId: "4903206020611",
              productCategoryId: "00006",
              productCategoryName: "清掃道具",
              productName: "アタリヤデッキブラシ",
              amount: 15,
              updatedAt: new Date(),
            }}
            icon={{
              id: "mdi:paper-edit-outline",
              color: "#696969",
              bgColor: "#fff8dc",
            }}
          />
          <ProductView
            product={{
              productId: "4903206020611",
              productCategoryId: "00006",
              productCategoryName: "清掃道具",
              productName: "アタリヤデッキブラシ",
              amount: 15,
              updatedAt: new Date(),
            }}
            icon={{
              id: "fa6-solid:pump-soap",
              color: "#1e90ff",
              bgColor: "#fff8dc",
            }}
          />
          <ProductView
            product={{
              productId: "4903206020611",
              productCategoryId: "00006",
              productCategoryName: "清掃道具",
              productName: "アタリヤデッキブラシ",
              amount: 15,
              updatedAt: new Date(),
            }}
            icon={{
              id: "fa6-solid:pump-soap",
              color: "#1e90ff",
              bgColor: "#fff8dc",
            }}
          />
          <ProductView
            product={{
              productId: "4903206020611",
              productCategoryId: "00006",
              productCategoryName: "清掃道具",
              productName: "アタリヤデッキブラシ",
              amount: 15,
              updatedAt: new Date(),
            }}
            icon={{
              id: "bi:bucket",
              color: "#778899",
              bgColor: "#fff8dc",
            }}
          />
          <ProductView
            product={{
              productId: "4903206020611",
              productCategoryId: "00006",
              productCategoryName: "清掃道具",
              productName: "アタリヤデッキブラシ",
              amount: 15,
              updatedAt: new Date(),
            }}
            icon={{
              id: "game-icons:ice-cube",
              color: "#00bfff",
              bgColor: "#fff8dc",
            }}
          />
          <ProductView
            product={{
              productId: "4903206020611",
              productCategoryId: "00006",
              productCategoryName: "清掃道具",
              productName: "アタリヤデッキブラシ",
              amount: 15,
              updatedAt: new Date(),
            }}
            icon={{
              id: "icon-park-solid:candy",
              color: "#A52A2A",
              bgColor: "#fff8dc",
            }}
          />
        </div>
      </div>
    </div>
  );
}
