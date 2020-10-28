import React from "react";
import { Link } from "react-router-dom";
import { Products } from "../products";
interface Props {
  products: Products;
}

export const ProductCard: React.FC<Props> = ({
  products: { title, price, id }
}) => {
  return (
    <div className="mb-4 mr-4" style={{ border: "1px solid" }}>
      <h1>{title}</h1>
      <h1>{id}</h1>
      <h1>{price}</h1>

      <Link to={`/productinfo/${id}`}>view more</Link>
    </div>
  );
};
