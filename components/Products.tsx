import React, { useContext, useState, useEffect } from "react";
import { ProductsContext } from "../ProductsContext";
import { ProductCard } from "./ProductCard";
import "../style.css";
export const Products: React.FC = () => {
  const allProducts = useContext(ProductsContext);
  const [searchValue, setSearchValue] = useState("");

  const handleChange = e => {
    setSearchValue(e.target.value);
    console.log(e.target.value);
  };
  const results = !searchValue
    ? allProducts
    : allProducts.filter(person =>
        person.title.toLowerCase().includes(searchValue.toLocaleLowerCase())
      );

  // console.log(allProducts)
  console.log(allProducts);
  return (
    <div>
      <div className="px-6 mt-10">
        <input
          type="text"
          className="border"
          placeholder="search products..."
          value={searchValue}
          onChange={handleChange}
        />
      </div>

      <div className="flex justify-center ">
        <div className="w-full grid md:grid-cols-2 lg:grid-cols-4 gap-4 px-6 py-6">
          {results.map((product, i) => (
            <ProductCard key={i} products={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
