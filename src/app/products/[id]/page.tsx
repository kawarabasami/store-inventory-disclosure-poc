import { fetchAllProducts, fetchProduct } from "@/domain/product/repository";
import React from "react";

export async function generateStaticParams() {
  const products = await fetchAllProducts();

  return products.map((p) => ({
    id: p.productId,
  }));
}

export default async function Page({ params }: { params: { id: string } }) {
  const product = await fetchProduct(params.id);
  if (product == null) return <div>not found</div>;

  return <div>{JSON.stringify(product)}</div>;
}
