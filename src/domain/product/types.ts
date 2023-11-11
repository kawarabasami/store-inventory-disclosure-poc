export interface Product {
  productId: string;
  productCategoryId: string;
  productCategoryName: string;
  productName: string;
  amount: number | null;
  updatedAt: Date | null;
}
