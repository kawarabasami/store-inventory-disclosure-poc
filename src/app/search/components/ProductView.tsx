import IconifyWrapper from "@/app/components/IconifyWrapper";
import { Product } from "@/domain/product/types";
import { format } from "date-fns";
import Link from "next/link";
import React from "react";

function toDateString(date: Date | null) {
  if (date == null) return "-";
  return format(date, "yyyy/MM/dd HH:mm:ss");
}

const ProductView: React.FC<{
  product: Product;
  icon: { id: string; color: string; bgColor: string };
}> = ({ product, icon }) => {
  const isInStock = product.amount != null && product.amount > 0;

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
          <Link
            href={`products/${product.productId}`}
            className="mb-1 inline-block text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
          >
            {product.productName}
          </Link>
          <span className="block text-gray-500 text-sm">
            カテゴリ: {product.productCategoryName}
          </span>
          <span className="block text-gray-500 text-sm">
            商品コード: {product.productId}
          </span>
          <span className="block text-gray-500 text-sm">
            更新日時: {toDateString(product.updatedAt)}
          </span>
        </div>
        <div className="flex justify-end">
          <span className="mb-1 font-bold text-gray-800 text-xl flex items-center gap-1 ">
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
            在庫数: {product.amount ?? "-"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
