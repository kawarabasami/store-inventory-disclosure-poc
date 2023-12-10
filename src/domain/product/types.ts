export interface Product {
  productId: string;
  productCategoryId: string;
  productCategoryName: string;
  productName: string;
  quantity: number | null;
  updatedAt: Date | null;
}
