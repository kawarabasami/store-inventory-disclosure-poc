import IconifyWrapper from "@/app/components/IconifyWrapper";
import { Product } from "@/domain/product/types";
import { format } from "date-fns";
import React from "react";

const ProductView: React.FC<{
  product: Product;
  icon: { id: string; color: string; bgColor: string };
}> = ({ product, icon }) => {
  return (
    <div className="py-5 sm:pt-5 border-b flex flex-wrap justify-center items-center gap-4 sm:py-2.5 lg:gap-6 ">
      <IconifyWrapper
        icon={icon.id}
        size="6rem"
        color={icon.color}
        bgColor={icon.bgColor}
        containerClassName="rounded-xl"
      />
      <div className="flex flex-1 flex-col justify-between">
        <div>
          <a
            href="#"
            className="mb-1 inline-block text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
          >
            {product.productName}
          </a>
          <span className="block text-gray-500">
            カテゴリ: {product.productCategoryName}
          </span>
          <span className="block text-gray-500">
            商品コード: {product.productId}
          </span>
          <span className="block text-gray-500">
            更新日時: {format(product.updatedAt, "yyyy/MM/dd HH:mm:ss")}
          </span>
        </div>
        <div className="flex justify-end">
          <span className="mb-1 font-bold text-gray-800 md:text-lg flex items-center gap-1 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            在庫数: {product.amount}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
