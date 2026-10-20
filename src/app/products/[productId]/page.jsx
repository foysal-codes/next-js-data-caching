import React from "react";

export const generateStaticParams = async () => {
  const res = await fetch("http://localhost:5000/products");
  const products = await res.json();
  return products.map((product) => ({ productId: product.id }));
};

const ProductDetailPage = async ({ params }) => {
  const { productId } = await params;
  const res = await fetch(`http://localhost:5000/products/${productId}`, {
    next: {
      revalidate: 10,
    },
  });
  const product = await res.json();
  return (
    <div>
      <h2>Product Details</h2>
      <h2>Name:{product.name}</h2>
      <h3>Category:{product.category}</h3>
      <h4>Price:{product.price}</h4>
      <p>Description:{product.description}</p>
    </div>
  );
};

export default ProductDetailPage;
