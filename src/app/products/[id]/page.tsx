import IconifyWrapper from "@/app/components/IconifyWrapper";
import { fetchAllProducts, fetchProduct } from "@/domain/product/repository";
import { ICON_OTHER } from "@/domain/productCategory/constants";
import { fetchAllCategories } from "@/domain/productCategory/repository";
import { format } from "date-fns";
import React from "react";
import Contacts from "./components/Contacts";

export async function generateStaticParams() {
  const products = await fetchAllProducts();

  return products.map((p) => ({
    id: p.productId,
  }));
}

function toDateString(date: Date | null) {
  if (date == null) return "-";
  return format(date, "yyyy/MM/dd HH:mm");
}

export default async function Page({ params }: { params: { id: string } }) {
  const [product, categories] = await Promise.all([
    fetchProduct(params.id),
    fetchAllCategories(),
  ]);
  if (product == null) return <div>not found</div>;

  const category = categories.find(
    (c) => c.productCategoryId === product.productCategoryId
  );
  const icon =
    category != null
      ? {
          id: category.iconId,
          color: category.iconColor,
          bgColor: category.iconBgColor,
        }
      : ICON_OTHER;
  const isInStock = product.quantity != null && product.quantity > 0;

  return (
    <div className="py-6 sm:py-8 lg:py-12">
      <div className="w-11/12 mx-auto max-w-screen-xl px-4 md:px-8 flex flex-col items-center">
        <div className="grid grid-cols-1 sm:grid-cols-4 sm:gap-5 items-center justify-center mb-10">
          {/* images - start */}
          <div className="col-span-1 w-full flex justify-center">
            <div className="relative overflow-hidden rounded-lg lg:col-span-4">
              <IconifyWrapper
                icon={icon.id}
                size="8rem"
                color={icon.color}
                bgColor={icon.bgColor}
                containerClassName="rounded-xl"
              />
            </div>
          </div>
          {/* images - end */}
          {/* content - start */}
          <div className="col-span-1 sm:col-span-3 pt-8 pr-5 sm:pr-10 ">
            {/* name - start */}
            <div className="mb-2 md:mb-3">
              <h2 className="mb-3 text-2xl font-bold text-gray-800 lg:text-3xl">
                {product.productName}
              </h2>
              <span className="mb-0.5 block text-gray-500">
                カテゴリ: {product.productCategoryName}
              </span>
              <span className="mb-0.5 block text-gray-500">
                商品コード: {product.productId}
              </span>
              <span className="mb-0.5 block text-gray-500">
                更新日時: {toDateString(product.updatedAt)}
              </span>
            </div>

            {/* price - start */}
            <div className="mb-4 mt-5">
              <div className="flex justify-end">
                <span className="mb-1 font-bold text-gray-800 text-2xl sm:text-3xl flex items-center gap-1 ">
                  {isInStock && (
                    <IconifyWrapper
                      icon="ic:round-check"
                      color="rgb(34 197 94)"
                      size="1.5rem"
                    />
                  )}
                  {!isInStock && (
                    <IconifyWrapper
                      icon="akar-icons:cross"
                      color="red"
                      size="1.2rem"
                    />
                  )}
                  在庫数: {product.quantity ?? "-"}
                </span>
              </div>
            </div>
            {/* price - end */}
          </div>
          {/* content - end */}
        </div>
        <Contacts />
      </div>
    </div>
  );
}
