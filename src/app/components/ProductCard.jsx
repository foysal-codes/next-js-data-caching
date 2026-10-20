import Link from "next/link";
import React from "react";

const ProductCard = ({ product }) => {
  const { id, name, category, price, description } = product;
  return (
    <div className="card card-border bg-base-100 w-96">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <h3>{category}</h3>
        <h4>{price}</h4>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <Link href={`/products/${id}`}>
            <button className="btn btn-primary">Show Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
