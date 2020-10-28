import React, { useContext } from "react";
import { ProductsContext } from "../ProductsContext";
import { ProductCard } from "./ProductCard";

export const Products: React.FC = () => {
  const allProducts = useContext(ProductsContext);
  // console.log(allProducts)
  return (
    <div>
      {allProducts.map((product, i) => (
        <ProductCard key={i} products={product} />
      ))}
    </div>
  );
};
