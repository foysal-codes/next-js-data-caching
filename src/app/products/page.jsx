import React from "react";
import ProductCard from "../components/ProductCard";

const getProducts = async () => {
  const res = await fetch("http://localhost:5000/products", {
    next: { revalidate: 10 },
  });
  return res.json();
};

const ProductPage = async () => {
  const products = await getProducts();
  return (
    <div>
      <h1>Products:{products.length}</h1>
      <div className="grid grid-cols-3 gap-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
