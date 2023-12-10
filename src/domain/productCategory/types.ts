export interface ProductCategory {
  productCategoryId: string;
  productCategoryName: string;
  iconId: string;
  iconColor: string;
  iconBgColor: string;
}

export interface CountProductsByCategory {
  productCategoryId: string;
  countProducts: number;
}
