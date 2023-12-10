import {
  CountProductsByCategory,
  ProductCategory,
} from "@/domain/productCategory/types";
import React from "react";
import IconifyWrapper from "./IconifyWrapper";

const CategoryCountBox: React.FC<{
  countInfo: CountProductsByCategory;
  category: ProductCategory;
}> = ({ countInfo, category }) => {
  return (
    <div className="m-1 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm">
      <IconifyWrapper
        icon={category.iconId}
        color={category.iconColor}
        bgColor={category.iconBgColor}
      />
      {category.productCategoryName}: {countInfo.countProducts}点
    </div>
  );
};

export default CategoryCountBox;
