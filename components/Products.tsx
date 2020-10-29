import React, { useContext } from "react";
import { ProductsContext } from "../ProductsContext";
import { ProductCard } from "./ProductCard";

export const Products: React.FC = () => {
  const allProducts = useContext(ProductsContext);
  // console.log(allProducts)
  return (
    <div className="flex justify-center" style={{ border: "1px solid" }}>
      <div className="mt-4 w-4/5 grid md:grid-cols-2 lg:grid-cols-4">
        {allProducts.map((product, i) => (
          <ProductCard key={i} products={product} />
        ))}
      </div>
    </div>
  );
};
