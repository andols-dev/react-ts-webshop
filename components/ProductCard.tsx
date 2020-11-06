import React from "react";
import { Link } from "react-router-dom";
import { Products } from "../products";
import { Starz } from "./Starz";
interface Props {
  products: Products;
}

export const ProductCard: React.FC<Props> = ({
  products: { title, price, id, img, latest, discount, disc, starz }
}) => {
  return (
    <div className="antialiased mb-4 mt-40 relative rounded-lg overflow-hidden border text-gray-900">
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
      <div className="p-6">
        <h4 className="font-semibold text-lg">{title}</h4>
        <h1>${price}</h1>
        <Starz starz={starz} />
        <div className="mt-4 flex justify-between">
          <button className="bg-gray-200 rounded-md p-2">
            <Link to={`/productinfo/${id}`}>View</Link>
          </button>
          <button className="bg-gray-200 rounded-md p-2 flex focus:outline-none">
            <span className="mr-1">Add to</span>
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
