import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductsContext } from "../ProductsContext";

interface Id {
  id: string;
}
export const ProductInfo: React.FC = () => {
  const { id } = useParams<Id>();
  console.log(id);

  const allProducts = useContext(ProductsContext);

  return (
    <div>
      {allProducts
        .filter(product => product.id === id)
        .map((product, i) => (
          <div key={i}>
            <h1>{product.title}</h1>
            <h1>{product.price}</h1>
            <Link to="/">Home</Link>
            <Link to="/hello">Home</Link>
          </div>
        ))}
    </div>
  );
};
