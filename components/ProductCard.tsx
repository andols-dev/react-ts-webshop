import React from "react";
import { Link } from "react-router-dom";
import { Products } from "../products";
interface Props {
  products: Products;
}

export const ProductCard: React.FC<Props> = ({
  products: { title, price, id, img, latest, discount, disc }
}) => {
  return (
    <div className="mb-4 relative">
      {latest && (
        <div
          style={{ position: "absolute", top: "10px", left: "10px" }}
          className="bg-green-600 rounded-full h-16 w-16 flex items-center justify-center text-white"
        >
          new
        </div>
      )}
      {discount && (
        <div
          style={{ position: "absolute", top: "10px", left: "10px" }}
          className="bg-red-600 rounded-full h-16 w-16 flex items-center justify-center text-white"
        >
          -{disc}%
        </div>
      )}
      <img src={img} />
      <h1>{title}</h1>
      <h1>{id}</h1>
      <h1>{price}</h1>

      <Link to={`/productinfo/${id}`}>view more</Link>
    </div>
  );
};
