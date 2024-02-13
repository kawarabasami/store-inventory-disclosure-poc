export interface ProductInventory {
  productId: string;
  quantity: number;
  updatedAt: Date;
}

export interface ProductInventoryPayload {
  productId: string;
  quantity: string;
}
